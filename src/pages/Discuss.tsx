import { useTranslation } from 'react-i18next';
import Head from 'entities/Head';
import { Container } from 'shared/ui';
import { DiscussesTableWidget } from 'widgets/discuss';

export default function DiscussScreen() {
   const { t } = useTranslation();

   return (
      <>
         <Head title="Home" />
         <Container>
            <div className='mt-6'>
               
               <DiscussesTableWidget />
            </div>
         </Container>
      </>
   );
}
