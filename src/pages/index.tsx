import { FC } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { About } from 'widgets/about';
import { Main } from 'widgets/main';
import { Previews } from 'widgets/previews';

export const getServerSideProps = async () => ({
  props: { ...(await serverSideTranslations('pl', ['common', 'home'])) },
});

const HomePage: FC = () => (
  <>
    <Main />
    <About />
    <Previews />
  </>
);

export default HomePage;
