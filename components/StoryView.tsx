
import React from 'react';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { PencilIcon } from './icons/PencilIcon';
import Logo from './Logo';

interface StoryViewProps {
  onBack: () => void;
  image?: string;
  isAdminMode?: boolean;
  onEditImage?: () => void;
}

const StoryView: React.FC<StoryViewProps> = ({ onBack, image, isAdminMode, onEditImage }) => {
  // Fallback image if config is empty
  const heroImage = image || "https://picsum.photos/seed/bogor-history/1200/600";

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-emerald-700 hover:text-emerald-900 font-medium transition-colors group"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Kembali
          </button>
          <Logo className="h-8 md:h-10 w-auto" />
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12 max-w-3xl">
        <article className="space-y-8">
          {/* Hero Image for Story */}
          <div className="rounded-2xl overflow-hidden shadow-xl mb-10 aspect-video relative group">
             <img 
              src={heroImage} 
              alt="Sejarah Bogor" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8 pointer-events-none">
               <h1 className="text-3xl md:text-4xl font-bold text-white">Cerita dari Kota Hujan</h1>
            </div>
            
            {/* Edit Button Overlay */}
            {isAdminMode && onEditImage && (
                <button 
                    onClick={onEditImage}
                    className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white border border-white/30 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                    title="Ubah Gambar Cerita"
                >
                    <PencilIcon className="w-5 h-5" />
                </button>
            )}
          </div>

          {/* Sejarah */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-800 mb-4 border-b-2 border-emerald-100 pb-2">
              Jejak Langkah Sejarah
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4 text-justify text-lg">
              <p>
                Bogor bukanlah sekadar kota penyangga ibu kota. Jauh sebelum gedung-gedung tinggi menjulang, wilayah ini dikenal sebagai <strong>Pakuan Pajajaran</strong>, ibu kota Kerajaan Sunda yang melegenda (1482–1579). Di sinilah Prabu Siliwangi pernah bertahta, meninggalkan jejak kearifan lokal yang masih terasa hingga kini.
              </p>
              <p>
                Memasuki era kolonial, Gubernur Jenderal Gustaaf Willem van Imhoff terpesona oleh kesejukan udaranya dan menamainya <strong>Buitenzorg</strong>, yang berarti "tanpa kekhawatiran" atau "tempat yang tenang". Warisan nama ini mencerminkan jati diri Bogor sebagai tempat peristirahatan dan ketenangan di tengah hiruk-pikuk kehidupan.
              </p>
            </div>
          </section>

          {/* Pariwisata */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-800 mb-4 border-b-2 border-emerald-100 pb-2">
              Pesona Pariwisata & Kuliner
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4 text-justify text-lg">
              <p>
                Identitas Bogor tak lepas dari <strong>Kebun Raya Bogor</strong>, hutan buatan di tengah kota yang menjadi paru-paru sekaligus saksi bisu sejarah. Namun, pesona Bogor meluas hingga ke sudut-sudut kelurahan.
              </p>
              <p>
                Mulai dari wisata alam curug yang tersembunyi, situs budaya seperti Prasasti Batutulis, hingga menjamurnya <em>coffee shop</em> kekinian yang memanfaatkan bangunan tua atau pemandangan alam. Belum lagi kekayaan kulinernya: Soto Mie, Doclang, Toge Goreng, hingga Roti Unyil yang selalu menjadi buah tangan wajib.
              </p>
            </div>
          </section>

           {/* Kenapa Website Ini Penting */}
          <section className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">
              Mengapa SindangBogor.com Hadir?
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
              <p>
                Seringkali kita mencari rekomendasi tempat wisata atau tempat nongkrong hanya berdasarkan "rating" populer, tanpa tahu bahwa di dekat rumah kita—di kelurahan kita sendiri—ada surga tersembunyi yang layak dikunjungi.
              </p>
              <p>
                <strong>SindangBogor.com</strong> hadir dengan pendekatan berbeda. Kami memetakan potensi pariwisata dan tempat usaha (seperti Coffee Shop) berdasarkan struktur administratif: <strong>Kecamatan dan Kelurahan</strong>.
              </p>
              <p>
                Tujuannya sederhana namun berdampak besar:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Eksplorasi Lokal:</strong> Membantu warga Bogor mengenal potensi wilayahnya sendiri.</li>
                <li><strong>Pemerataan Ekonomi:</strong> Mengangkat tempat-tempat usaha di kelurahan yang mungkin belum terekspos algoritma media sosial.</li>
                <li><strong>Data Terstruktur:</strong> Menyajikan informasi layaknya data pendidikan (Dapodik), namun untuk kebahagiaan dan rekreasi Anda.</li>
              </ul>
              <p className="mt-4 font-medium text-emerald-900">
                Mari menjelajah. Dari Bogor Tengah hingga pinggiran kota, setiap sudut punya cerita.
              </p>
            </div>
          </section>
          
          <div className="pt-8 flex justify-center pb-8">
             <button
                onClick={onBack}
                className="px-8 py-3 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-700 transition-colors font-semibold"
             >
                Mulai Jelajahi Sekarang
             </button>
          </div>

        </article>
      </main>

      <footer className="bg-gray-50 py-8 border-t border-gray-200 text-center">
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} SindangBogor.com. Dirawat dengan cinta.</p>
      </footer>
    </div>
  );
};

export default StoryView;
