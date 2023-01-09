import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards';

//export const HomePage = () => {
//   const params = useParams();
//   return (
//     <>
//       <Helmet>
//         <title>Petgram - Tu app de fotos de mascotas</title>
//         <meta
//           name="description"
//           content="Con Petgram puedes encontrar fotos de animales domésticos muy bonitos"
//         />
//       </Helmet>
//       <ListOfCategories />
//       <ListOfPhotoCards categoryId={params.id} />
//     </>
//   );
// };

// export const Home = React.memo(HomePage);

export const Home = () => {
  const params = useParams();

  const HomeComponent = useMemo(() => (
    <>
      <Helmet>
        <title>Petgram - Tu app de fotos de mascotas</title>
        <meta
          name="description"
          content="Con Petgram puedes encontrar fotos de animales domésticos muy bonitos"
        />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={params.id} />
    </>
  ));

  return HomeComponent;
};
