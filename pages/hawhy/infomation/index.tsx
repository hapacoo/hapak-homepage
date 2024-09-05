import styled from '@emotion/styled';

const InfoDiv = styled.div`
  width: 60%;
  height: auto;
  margin: 150px;
`;
const InfoP = styled.p`
  margin: 3px;
  font-size: 20px;
  font-weight: 400;
`;

export default function HWInfoPage() {
  return (
    <>
      <InfoDiv>
        <InfoP>
          Ha PAK received her Bachelor's degree in Sculpture from the Department
          of Plastic Arts at Sangmyung University in Seoul.
        </InfoP>
        <InfoP>
          She then pursued further studies in France, earning a Bachelor's
          degree in Art from Beaux-Arts Nantes Métropole, followed by both
          Bachelor's and Master's degrees in Art-Object from the Haute École des
          Arts du Rhin in Strasbourg.
        </InfoP>
        <InfoP>
          Currently, she is a doctoral candidate in Art Engineering at the
          Graduate School of Advanced Imaging Science, Multimedia & Film at
          Chung-Ang University.
        </InfoP>
      </InfoDiv>
      <InfoDiv>
        <h2>CERTIFICATION</h2>
        <InfoP>2023, SW Coding Instructor Level 1</InfoP>
        <InfoP>2023, Coding Specialist Professional Level 2 (C) </InfoP>
      </InfoDiv>
      <InfoDiv>
        <h2>PROJECT</h2>
        <InfoP>
          09/2023 ~ 02/2024, AI-CFT Artificial Intelligence Fusion Project,
          "Creating an AI Virtual YouTuber as a Commercial Item" Production
        </InfoP>
        <InfoP>
          03/2023 ~ 08/2023, AI-CFT Artificial Intelligence Fusion Project,
          "Home Sweet Home: AI and Human Trust and Choice" Artificial
          Intelligence Game Production
        </InfoP>
        <InfoP>
          09/2022 ~ 02/2023, AI-CFT Artificial Intelligence Fusion Project,
          "Visualization of Abstract Objects through Waveform Analysis"
          Production
        </InfoP>
      </InfoDiv>
      <InfoDiv>
        <h2>WORK EXPERIENCES</h2>
        <InfoP>
          09/2024 ~ 12/2024, Class "Media Art Workshop", Kyung Hee University
          International Campus, Collage of Art and Design
        </InfoP>
        <InfoP>
          28/08/2024 ~ 31/08/2024, Special Lecture"2024 Meta Contents
          Workshop2", KyungIl University
        </InfoP>
        <InfoP>
          03/2023 ~ 02/2024, "Research Assistant A", Chung-Ang University, The
          Graduate school of Advanced Imaging Science, Multimedia & Film,
          Department of Imaging
        </InfoP>
        <InfoP>
          09/2023 ~ 12/2023, Class "New Media and Imaging", Kyung Hee University
          International Campus, Graduate School of Digital Contents
        </InfoP>
        <InfoP>
          17/07/2023 ~ 20/07/2023, Special Lecture "VFX Video Production Project
          Using C4D", Korea University of Media Arts
        </InfoP>
        <InfoP>
          04/2023 ~ 06/2023, Class "Processing for Media Art", Geumcheon Science
          Cube, Geumcheon-gu Office Education Support Division
        </InfoP>
      </InfoDiv>
    </>
  );
}
