import SearchInput from '@/components/search/SearchInput';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Vmusic | Pesquisa`,
  };
}

export default async function PesquisaPage() {
  return (
    <section>
      <SearchInput />
    </section>
  );
}
