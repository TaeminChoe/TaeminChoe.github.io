import react from "react";
import styled from "styled-components";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 50px;

  .detail {
    border-left: 2px solid gray;
    padding-left: 20px;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .detail {
      border: none;
    }
  }
`;

const Logo = styled.div`
  margin-top: 20px;
  margin-right: 20px;
  border-radius: 50%;
  overflow: hidden;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    font-size: 0.7rem;
    margin: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.div`
  text-align: left;
  border-bottom: 1px solid gray;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const Summaries = styled.div`
  text-align: left;
`;

const Company = ({ carrierInfo }) => {
  const {
    companyName,
    logoSrc,
    team,
    position,
    duration,
    location,
    description,
  } = carrierInfo;
  const animatedItem = useScrollFadeIn("down");

  return (
    <Container {...animatedItem}>
      <Logo>
        <img src={logoSrc} />
      </Logo>
      <div className="detail">
        <Title>
          <div className="company-name">
            <h2>{companyName}</h2>
          </div>
          <div className="team-name">
            {team} | {position}
          </div>
          <div className="location">소재지 : {location}</div>
        </Title>
        <Summaries>
          <div className="summary">
            <div className="duration">기간 : {duration}</div>
            {description.map((desc, idx) => {
              return (
                <div className="works" key={`works_${idx}`}>
                  <h4>
                    {desc.title} ({desc.duration})
                  </h4>
                  <ul>
                    {desc.works.map((work, idx) => {
                      return <li key={`work_${idx}`}>{work}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </Summaries>
      </div>
    </Container>
  );
};

export default Company;
