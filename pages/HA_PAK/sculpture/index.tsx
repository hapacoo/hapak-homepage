import ContentContainer from '../../../src/components/units/Content/ContentContainer';

export default function HPSculpturePage(): JSX.Element {
  const Y2013 = [
    {
      title: 'Collection',
      content: '2013, PVC, variable installation',
      images: [
        '/image/hapak/sculpture/2013/2013-collection-1.webp',
        '/image/hapak/sculpture/2013/2013-collection-2.webp',
        '/image/hapak/sculpture/2013/2013-collection-3.webp',
      ],
    },
    {
      title: 'lienlienlien',
      content: '2013, tag pin, variable installation',
      images: [
        '/image/hapak/sculpture/2013/2013-lienlienlien-1.webp',
        '/image/hapak/sculpture/2013/2013-lienlienlien-2.webp',
        '/image/hapak/sculpture/2013/2013-lienlienlien-3.webp',
        '/image/hapak/sculpture/2013/2013-lienlienlien-4.webp',
        '/image/hapak/sculpture/2013/2013-lienlienlien-5.webp',
      ],
    },
    {
      title: 'Corps',
      content: '2013, tag pin, cup, variable installation',
      images: [
        '/image/hapak/sculpture/2013/2013-corps-1.webp',
        '/image/hapak/sculpture/2013/2013-corps-2.webp',
        '/image/hapak/sculpture/2013/2013-corps-4.webp',
        '/image/hapak/sculpture/2013/2013-corps-3.webp',
      ],
    },
    {
      title: 'Poisson',
      content: '2013, iron plate, nut, ',
      images: [
        '/image/hapak/sculpture/2013/2013-poisson-1.webp',
        '/image/hapak/sculpture/2013/2013-poisson-2.webp',
        '/image/hapak/sculpture/2013/2013-poisson-3.webp',
      ],
    },
  ];

  return (
    <div style={{ paddingTop: '150px' }}>
      {Y2013.map((group, index) => (
        <ContentContainer
          key={index}
          title={group.title}
          content={group.content}
          images={group.images}
        />
      ))}
    </div>
  );
}
