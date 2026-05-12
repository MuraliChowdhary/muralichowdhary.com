import type { WorkProject } from "../../types/project"

export const deliveristMobile: WorkProject = {
  slug: "deliverist-mobile",
  title: "Deliverist Mobile App",
  status: "shipped",
  oneLiner:
    "Customer-facing logistics app for Saudi Arabia. React Native, real-time tracking, ZATCA-compliant invoicing.",
  role: "Sole Developer",
  company: "OSIT / Deliverist",
  period: "2025",
  highlights: [
    "ZATCA-compliant invoice PDF generation built from scratch: bilingual content, QR code, 15% VAT line item, and Air Waybill with COD labeling all handled client-side",
    "4-step booking wizard with 3 address input methods (Google Maps pin drop, manual text entry, Saudi Short Address Code) covering the full range of how Saudi users share locations",
    "Public shipment tracking API with visual timeline so recipients can follow their delivery without an account, removing the support burden from the Deliverist team",
  ],
  problem:
    "Saudi logistics is crowded. Aramex, SMSA, and J&T all compete for the same customers. Most apps treat Arabic as an afterthought and bolt on COD support last, even though COD accounts for 60 to 70 percent of Saudi e-commerce transactions. Deliverist needed a mobile app that worked Arabic-first from day one, covered the full booking-to-delivery loop in a single interface, and generated invoices that satisfied ZATCA requirements without a separate billing tool.",
  whatIBuilt:
    "Built the entire customer-facing React Native app as sole developer, covering every screen from onboarding to delivery confirmation. The booking flow is a 4-step wizard that supports three address input methods: dropping a pin on Google Maps, typing a full address manually, or entering a Saudi Short Address Code, which is the format printed on most Saudi utility bills. Real-time shipment tracking renders a visual status timeline via a public API endpoint, so recipients can check progress without logging in. Invoice PDF generation runs on-device: bilingual Arabic/English content, a ZATCA-required QR code, 15% VAT calculation, and an Air Waybill with barcode and COD label when applicable. Over 10 payment methods integrated, including local Saudi options. Phone OTP authentication with push notifications for status updates. Every screen ships with full Arabic RTL layout via NativeWind and i18next, with no English-only fallback screens. Zustand manages booking and tracking state across the wizard steps. React Query handles cache invalidation for live shipment status without manual polling logic.",
  features: [
    {
      title: "4-Step Booking Wizard",
      description:
        "Pickup location, destination, item details, and confirmation. Each step validates via Zod schemas. Three address input methods: Google Maps pin drop, manual text entry, or Saudi Short Address Code (printed on utility bills). The wizard persists state across steps so users can navigate back without losing data.",
    },
    {
      title: "ZATCA Invoice Generation",
      description:
        "On-device PDF generation with bilingual Arabic/English content. Includes a ZATCA-required QR code containing seller info, VAT number, invoice total, and tax breakdown. 15% VAT is computed per line item. Air Waybill with barcode and COD label renders when cash-on-delivery is selected.",
    },
    {
      title: "Real-Time Tracking",
      description:
        "Public tracking API endpoint with a visual timeline: booked, picked up, in transit, out for delivery, delivered. Recipients check progress without logging in. Push notifications fire at status transitions. React Query handles cache invalidation so the timeline updates without manual pull-to-refresh.",
    },
    {
      title: "Arabic-First RTL",
      description:
        "Every screen ships with full Arabic RTL layout via NativeWind logical properties and i18next. No English-only fallback screens. Text alignment, icon direction, and wizard step order all flip correctly. The app reads the system locale on launch and sets the direction accordingly.",
    },
  ],
  stats: [
    { label: "Tax Compliance", value: "ZATCA" },
    { label: "Payment Methods", value: "10+" },
    { label: "Address Methods", value: "3" },
    { label: "App Screens", value: "20+" },
  ],
  tech: [
    "React Native",
    "Expo",
    "TypeScript",
    "Zustand",
    "React Query",
    "i18next",
    "Google Maps",
    "NativeWind",
  ],
}
