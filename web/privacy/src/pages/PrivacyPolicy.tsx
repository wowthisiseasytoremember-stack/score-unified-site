import { useEffect } from "react";

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "no-collection", title: "2. Data We Do Not Collect" },
  { id: "icloud", title: "3. Your Data & iCloud / CloudKit" },
  { id: "permissions", title: "4. Device Permissions" },
  { id: "subscriptions", title: "5. Subscriptions & RevenueCat" },
  { id: "email", title: "6. Email Communications" },
  { id: "children", title: "7. Children's Privacy" },
  { id: "changes", title: "8. Changes to This Policy" },
  { id: "contact", title: "9. Contact" },
];

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      {/* Header */}
      <header style={{ borderBottom: "1px solid #e8ecf0", padding: "2.5rem 0 2rem" }}>
        <div style={{ maxWidth: "740px", margin: "0 auto", padding: "0 1.5rem" }}>
          <p style={{ fontSize: "0.8rem", fontFamily: "system-ui, sans-serif", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b8099", marginBottom: "0.5rem", fontWeight: 600 }}>
            Score. — Reseller Profit Tracker
          </p>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "#1a2e4a", margin: "0 0 0.75rem", lineHeight: 1.2 }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: "0.875rem", color: "#6b8099", fontFamily: "system-ui, sans-serif", margin: 0 }}>
            Last updated: March 9, 2025
          </p>
        </div>
      </header>

      <main style={{ maxWidth: "740px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>

        {/* Intro callout */}
        <div style={{ backgroundColor: "#f0f4f8", borderLeft: "4px solid #1a2e4a", borderRadius: "4px", padding: "1.25rem 1.5rem", marginBottom: "3rem" }}>
          <p style={{ margin: 0, color: "#1a2e4a", fontSize: "1rem", lineHeight: 1.7, fontFamily: "system-ui, sans-serif" }}>
            <strong>The short version:</strong> Score. stores all your data privately on your own device and iCloud account. We do not collect, see, or store your financial data on our servers — ever.
          </p>
        </div>

        {/* Section 1 */}
        <section id="introduction" style={{ marginBottom: "2.75rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1a2e4a", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid #e8ecf0" }}>
            1. Introduction
          </h2>
          <p style={{ color: "#2c4a6e", lineHeight: 1.8, margin: "0 0 1rem" }}>
            Score. ("the App") is a reseller profit tracker developed by Justin ("I," "me," or "the developer"). This Privacy Policy describes how the App handles your information.
          </p>
          <p style={{ color: "#2c4a6e", lineHeight: 1.8, margin: 0 }}>
            Score. is built on a privacy-first foundation. Your inventory, sales, and financial records are yours — stored on your device and synced privately through your personal iCloud account. I have no ability to access this data.
          </p>
        </section>

        {/* Section 2 */}
        <section id="no-collection" style={{ marginBottom: "2.75rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1a2e4a", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid #e8ecf0" }}>
            2. Data We Do Not Collect
          </h2>
          <p style={{ color: "#2c4a6e", lineHeight: 1.8, margin: "0 0 1rem" }}>
            Score. does <strong>not</strong>:
          </p>
          <ul style={{ color: "#2c4a6e", lineHeight: 1.9, paddingLeft: "1.5rem", margin: "0 0 1rem" }}>
            <li>Collect or transmit your inventory, sales, or financial data to any server</li>
            <li>Sell your personal information to any third party</li>
            <li>Use third-party advertising networks or tracking SDKs</li>
            <li>Use third-party analytics services (e.g., Firebase, Mixpanel, Amplitude)</li>
            <li>Build behavioral profiles or fingerprint your device</li>
          </ul>
          <p style={{ color: "#2c4a6e", lineHeight: 1.8, margin: 0 }}>
            We do not run any backend servers that store user financial data.
          </p>
        </section>

        {/* Section 3 */}
        <section id="icloud" style={{ marginBottom: "2.75rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1a2e4a", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid #e8ecf0" }}>
            3. Your Data & iCloud / CloudKit
          </h2>
          <p style={{ color: "#2c4a6e", lineHeight: 1.8, margin: "0 0 1rem" }}>
            Score. uses Apple's <strong>SwiftData</strong> framework to store all data locally on your device. Sync across your devices is handled via your personal <strong>iCloud account</strong> using Apple's <strong>CloudKit</strong> framework.
          </p>
          <p style={{ color: "#2c4a6e", lineHeight: 1.8, margin: "0 0 1rem" }}>
            This means:
          </p>
          <ul style={{ color: "#2c4a6e", lineHeight: 1.9, paddingLeft: "1.5rem", margin: "0 0 1rem" }}>
            <li>Your data is stored in your <strong>private iCloud container</strong>, not a shared or developer-controlled database</li>
            <li>Only you can access your data — I cannot view, access, or retrieve it</li>
            <li>iCloud sync is governed by <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" style={{ color: "#1a2e4a", textDecorationColor: "#6b8099" }}>Apple's Privacy Policy</a></li>
            <li>Disabling iCloud sync keeps your data entirely on-device</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section id="permissions" style={{ marginBottom: "2.75rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1a2e4a", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid #e8ecf0" }}>
            4. Device Permissions
          </h2>
          <p style={{ color: "#2c4a6e", lineHeight: 1.8, margin: "0 0 1.5rem" }}>
            Score. may request the following optional permissions. All are optional and can be denied or revoked at any time in iOS Settings.
          </p>

          {[
            {
              icon: "📷",
              title: "Camera",
              body: "Used to capture photos of items in your inventory. Photos are stored locally on your device only and are never uploaded to any server.",
            },
            {
              icon: "🎙️",
              title: "Microphone",
              body: "Used for optional voice input features (e.g., dictating notes or item details). All audio processing occurs on-device and no audio is recorded, stored, or transmitted.",
            },
            {
              icon: "📍",
              title: "Location",
              body: "Used in-session to log sourcing trip locations. Location data is used only during the active session and is never stored persistently or transmitted off your device.",
            },
          ].map(({ icon, title, body }) => (
            <div key={title} style={{ display: "flex", gap: "1rem", marginBottom: "1.25rem", padding: "1.25rem", backgroundColor: "#f7f9fb", borderRadius: "8px" }}>
              <span style={{ fontSize: "1.5rem", lineHeight: 1, flexShrink: 0 }}>{icon}</span>
              <div>
                <p style={{ fontWeight: 700, color: "#1a2e4a", margin: "0 0 0.35rem", fontFamily: "system-ui, sans-serif" }}>{title}</p>
                <p style={{ color: "#2c4a6e", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{body}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Section 5 */}
        <section id="subscriptions" style={{ marginBottom: "2.75rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1a2e4a", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid #e8ecf0" }}>
            5. Subscriptions & RevenueCat
          </h2>
          <p style={{ color: "#2c4a6e", lineHeight: 1.8, margin: "0 0 1rem" }}>
            Score. uses <strong>RevenueCat</strong> to manage in-app subscriptions and purchases. When you purchase a subscription, RevenueCat processes and stores limited purchase-related data (such as purchase tokens and entitlement status) to validate your subscription.
          </p>
          <p style={{ color: "#2c4a6e", lineHeight: 1.8, margin: "0 0 1rem" }}>
            RevenueCat does not have access to your inventory, sales, or financial data within Score.
          </p>
          <p style={{ color: "#2c4a6e", lineHeight: 1.8, margin: 0 }}>
            For details on how RevenueCat handles purchase data, please review{" "}
            <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#1a2e4a", textDecorationColor: "#6b8099" }}>
              RevenueCat's Privacy Policy
            </a>
            . All in-app purchases are ultimately processed by Apple through the App Store.
          </p>
        </section>

        {/* Section 6 */}
        <section id="email" style={{ marginBottom: "2.75rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1a2e4a", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid #e8ecf0" }}>
            6. Email Communications
          </h2>
          <p style={{ color: "#2c4a6e", lineHeight: 1.8, margin: "0 0 1rem" }}>
            If you voluntarily opt in to email updates (for example, via a mailing list or support contact), your email address is collected solely for the purpose of sending those communications.
          </p>
          <p style={{ color: "#2c4a6e", lineHeight: 1.8, margin: 0 }}>
            Your email address is never shared with third parties for marketing purposes, is not linked to any data within the app, and you may unsubscribe at any time.
          </p>
        </section>

        {/* Section 7 */}
        <section id="children" style={{ marginBottom: "2.75rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1a2e4a", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid #e8ecf0" }}>
            7. Children's Privacy
          </h2>
          <p style={{ color: "#2c4a6e", lineHeight: 1.8, margin: 0 }}>
            Score. is not directed at children under the age of 13. I do not knowingly collect personal information from children under 13. If you believe a child has provided information through the app, please contact me and I will take appropriate action.
          </p>
        </section>

        {/* Section 8 */}
        <section id="changes" style={{ marginBottom: "2.75rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1a2e4a", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid #e8ecf0" }}>
            8. Changes to This Policy
          </h2>
          <p style={{ color: "#2c4a6e", lineHeight: 1.8, margin: "0 0 1rem" }}>
            I may update this Privacy Policy from time to time. When I do, I will revise the "Last updated" date at the top of this page. For significant changes, I may provide notice through the app or via email (if you have opted in).
          </p>
          <p style={{ color: "#2c4a6e", lineHeight: 1.8, margin: 0 }}>
            Continued use of Score. after any changes constitutes your acceptance of the updated policy.
          </p>
        </section>

        {/* Section 9 */}
        <section id="contact" style={{ marginBottom: "2.75rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1a2e4a", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid #e8ecf0" }}>
            9. Contact
          </h2>
          <p style={{ color: "#2c4a6e", lineHeight: 1.8, margin: "0 0 1rem" }}>
            If you have any questions or concerns about this Privacy Policy or the way Score. handles your data, please reach out:
          </p>
          <div style={{ backgroundColor: "#f0f4f8", borderRadius: "8px", padding: "1.25rem 1.5rem" }}>
            <p style={{ margin: "0 0 0.25rem", fontWeight: 700, color: "#1a2e4a", fontFamily: "system-ui, sans-serif" }}>Justin</p>
            <p style={{ margin: 0, color: "#2c4a6e", fontFamily: "system-ui, sans-serif" }}>
              Developer, Score.{" "}
              <br />
              <a href="mailto:[your email here]" style={{ color: "#1a2e4a" }}>[your email here]</a>
            </p>
          </div>
        </section>

        {/* Back to top */}
        <div style={{ textAlign: "center", marginTop: "3rem", borderTop: "1px solid #e8ecf0", paddingTop: "2rem" }}>
          <button
            onClick={scrollToTop}
            style={{
              background: "none",
              border: "1px solid #1a2e4a",
              borderRadius: "4px",
              color: "#1a2e4a",
              cursor: "pointer",
              fontFamily: "system-ui, sans-serif",
              fontSize: "0.85rem",
              letterSpacing: "0.05em",
              padding: "0.5rem 1.25rem",
            }}
          >
            ↑ Back to top
          </button>
          <p style={{ marginTop: "1.5rem", fontSize: "0.8rem", color: "#6b8099", fontFamily: "system-ui, sans-serif" }}>
            © {new Date().getFullYear()} Score. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}
