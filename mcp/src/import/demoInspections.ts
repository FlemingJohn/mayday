import type { Inspection } from "../types/Inspection.ts"

export const demoInspections: Inspection[] = [
  { imoNumber: "9123456", inspectedOn: "2026-03-14", port: "Singapore", authority: "Tokyo MOU", isDetained: true },
  { imoNumber: "9123456", inspectedOn: "2026-09-18", port: "Busan", authority: "Tokyo MOU", isDetained: true },
  { imoNumber: "9123456", inspectedOn: "2025-10-02", port: "Rotterdam", authority: "Paris MOU", isDetained: false },
  { imoNumber: "9345672", inspectedOn: "2026-07-01", port: "Jebel Ali", authority: "Riyadh MOU", isDetained: true },
  { imoNumber: "9456781", inspectedOn: "2026-05-10", port: "Fujairah", authority: "Riyadh MOU", isDetained: false },
  { imoNumber: "9567894", inspectedOn: "2026-08-22", port: "Rotterdam", authority: "Paris MOU", isDetained: false },
]
