import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Yalı Emlak Network</h1>
      <p>
        Yalı Emlak Network'e hoş geldiniz. Aşağıdaki sayfalar, iyzico ve PayTR onayına uygun
        gizlilik, KVKK, iptal-iade ve kullanım koşulları bilgilendirmelerini içerir.
      </p>

      <ul>
        <li>
          <Link href="/gizlilik-kvkk">Gizlilik ve KVKK Politikası</Link>
        </li>
        <li>
          <Link href="/iptal-iade-kosullari">İptal ve İade Koşulları</Link>
        </li>
        <li>
          <Link href="/kullanim-kosullari">Kullanım Koşulları</Link>
        </li>
        <li>
          <Link href="/mesafeli-satis-sozlesmesi">Mesafeli Satış Sözleşmesi</Link>
        </li>
      </ul>
    </main>
  )
}
