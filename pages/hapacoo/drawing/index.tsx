import ContentContainer from '../../../src/components/units/Content/ContentContainer';

export default function HPCDrawingPage() {
  const drawing = [
    {
      title: 'test',
      contet: 'sdfsdfsd',
      images: [
        '/image/hapak/sculpture/2013/2013-lienlienlien-3.webp',
        '/image/hapak/sculpture/2013/2013-lienlienlien-3.webp',
        '/image/hapak/sculpture/2013/2013-lienlienlien-3.webp',
      ],
    },
  ];
  return (
    <div style={{ paddingTop: '150px' }}>
      {drawing.map((group, index) => (
        <ContentContainer
          key={index}
          title={group.title}
          content={group.contet}
          images={group.images}
        />
      ))}
    </div>
  );
}
