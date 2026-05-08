import AppKit

struct Theme {
  let start: NSColor
  let end: NSColor
  let line: NSColor
  let shadow: NSColor
}

enum Variant {
  case cover
  case ui
  case flow
  case preview
  case texture
}

struct AssetSpec {
  let variant: Variant
  let sources: [String]
  let output: String
  let size: CGSize
  let theme: Theme
}

let basePath = "/Users/shaw/Desktop/yixiao-portfolio-site"

func ns(_ hex: String, alpha: CGFloat = 1.0) -> NSColor {
  let value = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
  var number: UInt64 = 0
  Scanner(string: value).scanHexInt64(&number)
  let r = CGFloat((number >> 16) & 0xFF) / 255
  let g = CGFloat((number >> 8) & 0xFF) / 255
  let b = CGFloat(number & 0xFF) / 255
  return NSColor(calibratedRed: r, green: g, blue: b, alpha: alpha)
}

func drawRoundedRect(_ rect: CGRect, radius: CGFloat, fill: NSColor, stroke: NSColor? = nil, lineWidth: CGFloat = 1) {
  let path = NSBezierPath(roundedRect: rect, xRadius: radius, yRadius: radius)
  fill.setFill()
  path.fill()
  if let stroke {
    stroke.setStroke()
    path.lineWidth = lineWidth
    path.stroke()
  }
}

func fitRect(imageSize: CGSize, in bounds: CGRect) -> CGRect {
  let scale = min(bounds.width / imageSize.width, bounds.height / imageSize.height)
  let width = imageSize.width * scale
  let height = imageSize.height * scale
  return CGRect(
    x: bounds.midX - width / 2,
    y: bounds.midY - height / 2,
    width: width,
    height: height
  )
}

func drawShadowedCard(image: NSImage, in rect: CGRect, cornerRadius: CGFloat, topBar: Bool = false, border: NSColor = ns("FFFFFF", alpha: 0.75)) {
  NSGraphicsContext.saveGraphicsState()

  let shadow = NSShadow()
  shadow.shadowColor = ns("111827", alpha: 0.16)
  shadow.shadowBlurRadius = 34
  shadow.shadowOffset = NSSize(width: 0, height: -14)
  shadow.set()

  drawRoundedRect(rect, radius: cornerRadius, fill: .white)
  NSGraphicsContext.restoreGraphicsState()

  drawRoundedRect(rect, radius: cornerRadius, fill: .white, stroke: border)

  let clipPath = NSBezierPath(roundedRect: rect, xRadius: cornerRadius, yRadius: cornerRadius)
  clipPath.addClip()

  var imageBounds = rect.insetBy(dx: 28, dy: 28)
  if topBar {
    let chromeHeight: CGFloat = 54
    let chromeRect = CGRect(x: rect.minX, y: rect.maxY - chromeHeight, width: rect.width, height: chromeHeight)
    drawRoundedRect(chromeRect, radius: cornerRadius, fill: ns("F8FAFC"))
    ns("E2E8F0").setStroke()
    let separator = NSBezierPath()
    separator.move(to: CGPoint(x: rect.minX, y: chromeRect.minY))
    separator.line(to: CGPoint(x: rect.maxX, y: chromeRect.minY))
    separator.lineWidth = 1
    separator.stroke()

    let dots = [ns("F87171"), ns("FBBF24"), ns("34D399")]
    for (index, color) in dots.enumerated() {
      color.setFill()
      let circle = NSBezierPath(ovalIn: CGRect(x: rect.minX + 24 + CGFloat(index * 18), y: chromeRect.midY - 5, width: 10, height: 10))
      circle.fill()
    }
    imageBounds = CGRect(x: rect.minX + 28, y: rect.minY + 28, width: rect.width - 56, height: rect.height - chromeHeight - 42)
  }

  image.draw(in: fitRect(imageSize: image.size, in: imageBounds))
}

func drawBackground(in rect: CGRect, theme: Theme, structured: Bool) {
  let gradient = NSGradient(starting: theme.start, ending: theme.end)
  gradient?.draw(in: rect, angle: structured ? 135 : 90)

  let radial = NSBezierPath(ovalIn: CGRect(x: rect.minX - rect.width * 0.15, y: rect.midY, width: rect.width * 0.9, height: rect.height * 0.9))
  theme.shadow.withAlphaComponent(0.09).setFill()
  radial.fill()

  if structured {
    theme.line.withAlphaComponent(0.09).setStroke()
    for step in stride(from: 0, through: Int(rect.width), by: 72) {
      let path = NSBezierPath()
      path.move(to: CGPoint(x: CGFloat(step), y: rect.minY))
      path.line(to: CGPoint(x: CGFloat(step), y: rect.maxY))
      path.lineWidth = 1
      path.stroke()
    }

    for step in stride(from: 0, through: Int(rect.height), by: 72) {
      let path = NSBezierPath()
      path.move(to: CGPoint(x: rect.minX, y: CGFloat(step)))
      path.line(to: CGPoint(x: rect.maxX, y: CGFloat(step)))
      path.lineWidth = 1
      path.stroke()
    }
  } else {
    for index in 0..<18 {
      let alpha = 0.03 + CGFloat(index) * 0.002
      theme.line.withAlphaComponent(alpha).setStroke()
      let wave = NSBezierPath()
      let y = CGFloat(index) * rect.height / 18
      wave.move(to: CGPoint(x: rect.minX - 40, y: y))
      wave.curve(to: CGPoint(x: rect.maxX + 40, y: y + 20), controlPoint1: CGPoint(x: rect.width * 0.35, y: y + 44), controlPoint2: CGPoint(x: rect.width * 0.65, y: y - 28))
      wave.lineWidth = 1.25
      wave.stroke()
    }
  }
}

func textureDots(in rect: CGRect, theme: Theme, count: Int) {
  for index in 0..<count {
    let seed = CGFloat(index)
    let x = ((seed * 97).truncatingRemainder(dividingBy: rect.width - 40)) + 20
    let y = ((seed * 57).truncatingRemainder(dividingBy: rect.height - 40)) + 20
    let size = 4 + ((seed * 13).truncatingRemainder(dividingBy: 14))
    let color = index.isMultiple(of: 3) ? theme.shadow.withAlphaComponent(0.10) : theme.line.withAlphaComponent(0.12)
    color.setFill()
    NSBezierPath(ovalIn: CGRect(x: x, y: y, width: size, height: size)).fill()
  }
}

func loadImage(at path: String) -> NSImage {
  let url = URL(fileURLWithPath: path)
  guard let image = NSImage(contentsOf: url) else {
    fatalError("Could not load image at \(path)")
  }
  return image
}

func ensureParentDirectory(for output: String) throws {
  let directory = URL(fileURLWithPath: output).deletingLastPathComponent()
  try FileManager.default.createDirectory(at: directory, withIntermediateDirectories: true)
}

func export(spec: AssetSpec) throws {
  let image = NSImage(size: spec.size)
  image.lockFocus()

  let canvas = CGRect(origin: .zero, size: spec.size)

  switch spec.variant {
  case .cover:
    drawBackground(in: canvas, theme: spec.theme, structured: true)
    let primary = loadImage(at: spec.sources[0])
    let secondary = spec.sources.count > 1 ? loadImage(at: spec.sources[1]) : primary
    drawShadowedCard(image: primary, in: CGRect(x: 120, y: 180, width: canvas.width * 0.66, height: canvas.height * 0.66), cornerRadius: 40, topBar: true)
    drawShadowedCard(image: secondary, in: CGRect(x: canvas.width * 0.63, y: canvas.height * 0.18, width: canvas.width * 0.26, height: canvas.height * 0.28), cornerRadius: 30, topBar: false)

  case .ui:
    drawBackground(in: canvas, theme: spec.theme, structured: false)
    drawShadowedCard(image: loadImage(at: spec.sources[0]), in: CGRect(x: 120, y: 120, width: canvas.width - 240, height: canvas.height - 240), cornerRadius: 36, topBar: false)

  case .flow:
    drawBackground(in: canvas, theme: spec.theme, structured: true)
    drawShadowedCard(image: loadImage(at: spec.sources[0]), in: CGRect(x: 100, y: 130, width: canvas.width - 200, height: canvas.height - 220), cornerRadius: 34, topBar: true)

  case .preview:
    drawBackground(in: canvas, theme: spec.theme, structured: false)
    drawShadowedCard(image: loadImage(at: spec.sources[0]), in: CGRect(x: 90, y: 100, width: canvas.width - 180, height: canvas.height - 180), cornerRadius: 28, topBar: false)

  case .texture:
    drawBackground(in: canvas, theme: spec.theme, structured: spec.sources.first == "structured")
    textureDots(in: canvas, theme: spec.theme, count: 70)
  }

  image.unlockFocus()

  guard
    let tiffData = image.tiffRepresentation,
    let representation = NSBitmapImageRep(data: tiffData),
    let pngData = representation.representation(using: .png, properties: [:])
  else {
    fatalError("Could not encode image for \(spec.output)")
  }

  try ensureParentDirectory(for: spec.output)
  try pngData.write(to: URL(fileURLWithPath: spec.output))
}

let lexTheme = Theme(start: ns("F4F8FF"), end: ns("E7EEF9"), line: ns("5C7BDA"), shadow: ns("5C7BDA"))
let capsoTheme = Theme(start: ns("FFF5F1"), end: ns("FFE9E0"), line: ns("DD7B66"), shadow: ns("DD7B66"))
let stylrTheme = Theme(start: ns("FFF6FA"), end: ns("F7EAF2"), line: ns("8B4B67"), shadow: ns("8B4B67"))
let greenTheme = Theme(start: ns("F5FAF6"), end: ns("EAF4EA"), line: ns("6D8E70"), shadow: ns("6D8E70"))
let graphiteTheme = Theme(start: ns("F6F7FB"), end: ns("E8EBF4"), line: ns("5C6980"), shadow: ns("48505F"))

let specs: [AssetSpec] = [
  AssetSpec(
    variant: .cover,
    sources: ["\(basePath)/public/projects/lexflow/page-6.png", "\(basePath)/public/projects/lexflow/page-7.png"],
    output: "\(basePath)/public/assets/images/lexflow/cover.png",
    size: CGSize(width: 2200, height: 1500),
    theme: lexTheme
  ),
  AssetSpec(
    variant: .flow,
    sources: ["\(basePath)/public/projects/lexflow/page-7.png"],
    output: "\(basePath)/public/assets/images/lexflow/flow.png",
    size: CGSize(width: 2200, height: 1400),
    theme: lexTheme
  ),
  AssetSpec(
    variant: .ui,
    sources: ["\(basePath)/public/projects/lexflow/page-6.png"],
    output: "\(basePath)/public/assets/images/lexflow/ui.png",
    size: CGSize(width: 2200, height: 1500),
    theme: lexTheme
  ),
  AssetSpec(
    variant: .cover,
    sources: ["\(basePath)/public/projects/capso/page-6.png", "\(basePath)/public/projects/capso/page-4.png"],
    output: "\(basePath)/public/assets/images/capso/cover.png",
    size: CGSize(width: 2200, height: 1500),
    theme: capsoTheme
  ),
  AssetSpec(
    variant: .flow,
    sources: ["\(basePath)/public/projects/capso/page-4.png"],
    output: "\(basePath)/public/assets/images/capso/flow.png",
    size: CGSize(width: 2200, height: 1400),
    theme: capsoTheme
  ),
  AssetSpec(
    variant: .ui,
    sources: ["\(basePath)/public/projects/capso/page-6.png"],
    output: "\(basePath)/public/assets/images/capso/ui.png",
    size: CGSize(width: 2200, height: 1500),
    theme: capsoTheme
  ),
  AssetSpec(
    variant: .cover,
    sources: ["\(basePath)/public/projects/stylr/page-6.png", "\(basePath)/public/projects/stylr/page-7.png"],
    output: "\(basePath)/public/assets/images/stylr/cover.png",
    size: CGSize(width: 2200, height: 1500),
    theme: stylrTheme
  ),
  AssetSpec(
    variant: .flow,
    sources: ["\(basePath)/public/projects/stylr/page-4.png"],
    output: "\(basePath)/public/assets/images/stylr/flow.png",
    size: CGSize(width: 2200, height: 1400),
    theme: stylrTheme
  ),
  AssetSpec(
    variant: .ui,
    sources: ["\(basePath)/public/projects/stylr/page-7.png"],
    output: "\(basePath)/public/assets/images/stylr/ui.png",
    size: CGSize(width: 2200, height: 1500),
    theme: stylrTheme
  ),
  AssetSpec(
    variant: .preview,
    sources: ["\(basePath)/public/projects/sensory-garden/page-8.png"],
    output: "\(basePath)/public/assets/images/sensory-garden/cover.png",
    size: CGSize(width: 1800, height: 1200),
    theme: greenTheme
  ),
  AssetSpec(
    variant: .preview,
    sources: ["\(basePath)/public/projects/navigation-shoe/page-5.png"],
    output: "\(basePath)/public/assets/images/navigation-shoe/cover.png",
    size: CGSize(width: 1800, height: 1200),
    theme: graphiteTheme
  ),
  AssetSpec(
    variant: .texture,
    sources: ["structured"],
    output: "\(basePath)/public/assets/images/decor/lexflow-structure.png",
    size: CGSize(width: 1800, height: 1200),
    theme: lexTheme
  ),
  AssetSpec(
    variant: .texture,
    sources: ["signal"],
    output: "\(basePath)/public/assets/images/decor/capso-signal.png",
    size: CGSize(width: 1800, height: 1200),
    theme: capsoTheme
  ),
  AssetSpec(
    variant: .texture,
    sources: ["editorial"],
    output: "\(basePath)/public/assets/images/decor/stylr-editorial.png",
    size: CGSize(width: 1800, height: 1200),
    theme: stylrTheme
  ),
]

for spec in specs {
  try export(spec: spec)
  print("wrote \(spec.output)")
}
