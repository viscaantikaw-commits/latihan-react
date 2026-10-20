import KartuProfil from './components/KartuProfil.jsx';

export default function App() {
  return (
    <main>
      <h1>Judul Halaman</h1>
      <KartuProfil nama="Budi" peran="Mahasiswa" tahun={2024} aktif={true} />
      <KartuProfil nama="visca" peran="Mahasiswa" tahun={2023} aktif={true} />
      <KartuProfil nama="lilis" peran="Mahasiswa" tahun={2021} aktif={true} />
    </main>
  );
}
  