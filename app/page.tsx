import React from 'react'

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', color: '#111827', minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Üst Menü */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0, color: '#1e3a8a' }}>Yalı Emlak Network</h1>
        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.95rem', fontWeight: '500' }}>
          <a href="#hero" style={{ textDecoration: 'none', color: '#374151' }}>Ana Sayfa</a>
          <a href="#listings" style={{ textDecoration: 'none', color: '#374151' }}>İlanlar</a>
          <a href="#contact" style={{ textDecoration: 'none', color: '#374151' }}>İletişim</a>
        </div>
      </nav>

      {/* Kapak / Karşılama Alanı */}
      <section id="hero" style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#1f2937' }}>
          Lüks Gayrimenkul ve Profesyonel Danışmanlık
        </h2>
        <p style={{ fontSize: '1.125rem', color: '#4b5563', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
          Yalı Emlak Network ile hayalinizdeki mülke ulaşın. Güvenilir portföy, doğru değerleme ve hızlı çözümler.
        </p>
        <a href="#listings" style={{ display: 'inline-block', backgroundColor: '#1e3a8a', color: '#ffffff', padding: '0.75rem 1.5rem', borderRadius: '0.375rem', fontWeight: '600', textDecoration: 'none' }}>
          İlanları İncele
        </a>
      </section>

      {/* Öne Çıkan İlanlar */}
      <section id="listings" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '2rem', textAlign: 'center' }}>Öne Çıkan Gayrimenkuller</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb' }}>
            <div style={{ height: '200px', backgroundColor: '#cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', fontWeight: 'bold' }}>
              Gayrimenkul Görseli
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>Deniz Manzaralı Yalı Dairesi</h4>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: '0 0 1rem 0' }}>İzmir, Urla</p>
              <p style={{ color: '#1e3a8a', fontSize: '1.25rem', fontWeight: 'bold', margin: '0 0 1rem 0' }}>14.500.000 TL</p>
              <div style={{ fontSize: '0.875rem', color: '#4b5563', borderTop: '1px solid #f3f4f6', paddingTop: '0.75rem' }}>
                3+1 • 180 m² • 2. Kat
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb' }}>
            <div style={{ height: '200px', backgroundColor: '#cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', fontWeight: 'bold' }}>
              Gayrimenkul Görseli
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>Merkezi Ticari Arsa</h4>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: '0 0 1rem 0' }}>İzmir, Çeşme</p>
              <p style={{ color: '#1e3a8a', fontSize: '1.25rem', fontWeight: 'bold', margin: '0 0 1rem 0' }}>22.000.000 TL</p>
              <div style={{ fontSize: '0.875rem', color: '#4b5563', borderTop: '1px solid #f3f4f6', paddingTop: '0.75rem' }}>
                Ticari İmarlı • 1.200 m²
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb' }}>
            <div style={{ height: '200px', backgroundColor: '#cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', fontWeight: 'bold' }}>
              Gayrimenkul Görseli
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>Müstakil Bahçeli Villa</h4>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: '0 0 1rem 0' }}>İzmir, Güzelbahçe</p>
              <p style={{ color: '#1e3a8a', fontSize: '1.25rem', fontWeight: 'bold', margin: '0 0 1rem 0' }}>18.750.000 TL</p>
              <div style={{ fontSize: '0.875rem', color: '#4b5563', borderTop: '1px solid #f3f4f6', paddingTop: '0.75rem' }}>
                4+1 • 260 m² • Özel Havuzlu
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Alt Bilgi / İletişim */}
      <footer id="contact" style={{ backgroundColor: '#1e293b', color: '#94a3b8', padding: '3rem 2rem', textAlign: 'center' }}>
        <p style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.125rem', margin: '0 0 0.5rem 0' }}>Yalı Emlak Network</p>
        <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.875rem' }}>Profesyonel Gayrimenkul Yatırım ve Danışmanlık Hizmetleri</p>
        <p style={{ fontSize: '0.75rem', margin: 0 }}>© 2026 Yalı Emlak. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  )
}
