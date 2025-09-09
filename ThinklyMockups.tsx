import React from "react";

// HERO SECTION
export function HeroMockup() {
  return (
    <section className="hero-bg min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24">
      <h1 className="heading text-5xl md:text-6xl font-extrabold mb-6">THINKLY</h1>
      <p className="body text-lg md:text-2xl mb-8 max-w-2xl mx-auto">Find people who grow with you</p>
      <div className="flex gap-4 justify-center">
        <button className="cta-primary px-8 py-4 text-lg font-bold rounded-full focus-ring">Start Your Journey</button>
        <button className="cta-outline px-8 py-4 text-lg font-bold rounded-full focus-ring">Learn More</button>
      </div>
    </section>
  );
}

// CARD GRID
export function CardGridMockup() {
  return (
    <section className="bg-[var(--thinkly-bgLight)] py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1,2,3].map((i) => (
          <div key={i} className="card p-8">
            <div className="w-12 h-12 rounded-full bg-[var(--thinkly-lightBlue)] flex items-center justify-center mb-4">
              <span className="text-2xl text-[var(--thinkly-purple)]">★</span>
            </div>
            <h3 className="heading text-xl font-bold mb-2">Card Title {i}</h3>
            <p className="body text-base mb-4">This is a sample card description. Use this space to highlight features or benefits.</p>
            <a href="#" className="link font-medium">Learn More →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

// FOOTER
export function FooterMockup() {
  return (
    <footer className="footer py-8 text-center text-sm">
      © 2025 <span className="font-semibold text-[var(--thinkly-purple)]">Thinkly</span>. Built for curious minds, creative hearts, and big dreams.
    </footer>
  );
}
