import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { COMMON_MEDIA } from 'shared/lib/responsive-media';
import { AccentText, SectionText } from 'shared/ui';
import styled from 'styled-components';

export const getServerSideProps = async ({ params }) => {
  const ns = params?.slug;

  return {
    props: {
      ns,
      ...(await serverSideTranslations('pl', ['common', ns])),
    },
  };
};

interface Props {
  ns: string;
}

const InformationPage: FC<Props> = ({ ns }) => {
  const [t] = useTranslation(ns);

  return (
    <>
      <Container>
        <SectionText>{t(`${ns}:title`)}</SectionText>

        <Wrapper>
          <AccentText
            dangerouslySetInnerHTML={{ __html: t(`${ns}:description`) }}
          />
        </Wrapper>
      </Container>
    </>
  );
};

export default InformationPage;

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 160px auto;

  & > :not(:first-child) {
    margin-top: 24px;
  }

  ${COMMON_MEDIA.MOBILE} {
    padding: 0 20px;
    margin: 80px auto;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${AccentText} {
    white-space: pre-wrap;

    strong {
      font-size: 20px;
      font-weight: 700;
    }
  }

  & > :not(:first-child) {
    margin-top: 16px;
  }
`;
