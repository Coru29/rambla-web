// Renders assets/og.png (1200×630, the link preview image) from the app icon.
// Usage: swift tools/og.swift   (from the site root)
import AppKit

let width: CGFloat = 1200, height: CGFloat = 630
let image = NSImage(size: NSSize(width: width, height: height))
image.lockFocus()
let celeste = NSColor(srgbRed: 0x4F / 255, green: 0xAD / 255, blue: 0xE3 / 255, alpha: 1)
let deep = NSColor(srgbRed: 0x35 / 255, green: 0x93 / 255, blue: 0xD2 / 255, alpha: 1)
NSGradient(starting: celeste, ending: deep)!.draw(in: NSRect(x: 0, y: 0, width: width, height: height), angle: -90)
if let icon = NSImage(contentsOfFile: "assets/icon-512.png") {
    let side: CGFloat = 300
    let rect = NSRect(x: 110, y: (height - side) / 2, width: side, height: side)
    let clip = NSBezierPath(roundedRect: rect, xRadius: 68, yRadius: 68)
    NSGraphicsContext.saveGraphicsState()
    let shadow = NSShadow()
    shadow.shadowColor = NSColor(srgbRed: 0.05, green: 0.25, blue: 0.45, alpha: 0.35)
    shadow.shadowBlurRadius = 30
    shadow.shadowOffset = NSSize(width: 0, height: -10)
    shadow.set()
    NSColor.white.setFill()
    clip.fill()
    NSGraphicsContext.restoreGraphicsState()
    NSGraphicsContext.saveGraphicsState()
    clip.addClip()
    icon.draw(in: rect)
    NSGraphicsContext.restoreGraphicsState()
}
func font(_ size: CGFloat, _ weight: NSFont.Weight) -> NSFont { NSFont.systemFont(ofSize: size, weight: weight) }
let title = NSAttributedString(string: "Rambla", attributes: [.font: font(112, .bold), .foregroundColor: NSColor.white])
title.draw(at: NSPoint(x: 470, y: 318))
let lines = ["Tus ventanas en fila, con scroll horizontal.", "Gratis y open source para macOS."]
for (i, line) in lines.enumerated() {
    NSAttributedString(string: line, attributes: [.font: font(36, .medium), .foregroundColor: NSColor(white: 1, alpha: 0.92)])
        .draw(at: NSPoint(x: 474, y: 250 - CGFloat(i) * 50))
}
image.unlockFocus()
let rep = NSBitmapImageRep(data: image.tiffRepresentation!)!
try! rep.representation(using: .png, properties: [:])!.write(to: URL(fileURLWithPath: "assets/og.png"))
print("assets/og.png")
