'use client';

import { Heading, Typography } from '@hispanic-ui';

import { Container } from '@/components/layout/Container';

export default function About() {
  return (
    <div
      className="pt-defaultPadding"
      style={{
        background:
          'linear-gradient(360deg, #081F3F 1.04%, rgba(67, 26, 36, 0.66) 43.23%, rgba(67, 26, 36, 0.00) 100%)',
      }}
    >
      <Container>
        <Typography variant="white" weight="bold" lexend>
          Our Story
        </Typography>
        <Heading className="mt-3" level={2.5} color="white">
          Our History Begins
        </Heading>
        <div className="mt-16 columns-2 gap-16 pb-24">
          <Typography size="large" variant="white">
            In July 29th, 1957, the New York City Police Department Hispanic
            Society was incorporated, with Police Commissioner Stephen F.
            Kennedy’s approval. The organizations founding fathers (William
            Rodriguez, Peter Rodriguez, Isabel Barber, Eric Seise, Ivan Marfisi,
            Eugene Calderon, Victor J. Ortiz, Alex Cuesta, and Thomas Martino)
            indicated that the formation of the organization was “to promote and
            develop a friendly and fraternal spirit among all members of Spanish
            descent in the police force of the City of New York, and to create a
            more harmonious relationship within the police department and the
            City of New York.
            <br /> <br />
            Shortly before its inception, there were approximately 40 officers
            of Hispanic origin. These officers were apprised by Police Officer
            Victor J. Ortiz of the need to form a fraternal organization that
            would address and voice the concerns of Hispanic officers. From its
            very beginnings, the Hispanic Society has been involved in enhancing
            the opportunities for appointments and promotions of its members.
            Hispanic Society members were not only concerned with the plight of
            the officers it represented, but they also set forth on an immediate
            recruitment drive to increase the number of Hispanic candidates
            taking the police entrance examinations. At that time, Hispanics did
            not join the Police Department for various reasons. In 1954, there
            were only 20-30 Hispanics in a police force of 20,000. In their
            recruitment endeavor, the Hispanic Society members appealed to the
            Commonwealth of Puerto Rico to assist them in their recruitment
            efforts. In order to improve the prospective candidates chances of
            selection, tutorial sessions were held. As a result of these
            attempts, the number of Hispanics joining the Police Department
            increased dramatically.
            <br /> <br /> Throughout the years the Hispanic Society has been
            involved in challenging entrance and promotional examinations and
            assessing the status of Hispanic officers in the department. In the
            early 1970’s, as a result of the recruitment drives, Society members
            discovered that many Hispanics were unable to realize their dream of
            becoming police officers because they did not meet the departments
            height requirement. The Hispanic Society addressed the problem
            locally by attempting to have the Police Department change these
            criteria; this was an unsuccessful venture, but in 1972, congress
            amended the Civil Rights Act of 1964, prohibiting the height
            requirement as it was ruled discriminatory. This resulted in a
            change in personnel selection practices in the law enforcement
            field. The removal of this barrier substantially increases the
            number of women and Hispanics in the Police Department.In 1972, the
            Hispanic Society joined the Guardians in contesting the entry-level
            examinations administered in 1968 and 1972. An injunction barred the
            selection of candidates from those lists. Subsequently, that lawsuit
            had an impact on those Hispanic and African-American officers who
            were hired off that list. Those affected received retroactive monies
            due to their newly designated appointment dates.
            <br /> <br /> On October 5, 1979, the Guardians Association and the
            Hispanic Society lodged a lawsuit, which challenged the June 1979,
            police examination as not being job-related and its format unlike
            that of previous examinations. Federal Judge Carter ruled on
            December 17, 1978, that New York City could not use its latest Civil
            Service Exam to select new police recruits until he decided on a
            plan to assist African-American and Hispanic applicants to the
            Police Department. This lawsuit resulted in a hiring quota of 1/3 of
            the recruits selected being of Hispanic and African-American
            descent.
            <br /> <br /> In 1981, yet another challenge, the Hispanic Society
            mandated that the promotion of new police sergeants should be
            consistent with the number of police candidates competing for that
            position. Not only is the Hispanic Society actively involved with
            issues relevant to its members, but it also engages in matters
            directly affecting the community. An example would be the
            significant role played immediately after the island of Puerto
            Rico’s devastation by Hurricane Hugo in September 1989. The New York
            City Police Department amassed personnel as well as heavy equipment
            from its elite Emergency Services Unit to assist the Puerto Rican
            government and the Red Cross in their post-hurricane assistance. To
            further these efforts, the Hispanic Society appealed to its members
            to volunteer their time and travel to Puerto Rico to help the many
            affected families. The officers that unselfishly left their families
            behind for three weeks provided diverse aid, some were translators
            for those Puerto Ricans who could not describe to Red Cross
            personnel the hardship suffered, others accompanied Red Cross staff
            to remote areas of the island that had not yet been assessed as to
            the damage incurred, and yet others distributed food and emergency
            supplies to non-for-profit organizations that’s would in turn
            disperse supplies to the community. The Hispanic Society also raised
            funds and provided aid for Hurricane George in 1998.
            <br /> <br />
            The Hispanic Society has helped during other catastrophic events,
            such as the tragedy of American Airlines Flight# 587 bound for the
            Dominican Republic, which crashed in Belle Harbor, Queens in
            November 12th 2001. The Hispanic Society raised funds, served as
            translators, and helped the families in the recovery effort. The
            Hispanic Society also participated in fundraisers for the victims of
            Hurricane Katrina in August 2005. The Hispanic Society also held a
            fundraiser for the victims in the Dominican Republic of Hurricane
            Noel in October 2007 and for the victims of the floods in Mexico in
            October & November 2007.
            <br /> <br />
            On the local level the Hispanic Society has been involved in the
            restoration of a church in the Lower East Side in Manhattan. The
            Annual Christmas Party is dedicated to raising funds for sick or
            injured children who are spending the holiday in local hospitals.
            The Hispanic Society has hosted and participated in vest drives, for
            law enforcement in Puerto Rico and the Dominican Republic.
            <br /> <br />
            The Hispanic Society pledges to continue in the tradition set forth
            by our Founding Fathers to assist our members, communities and other
            countries.
          </Typography>
          <img
            src="/test/aboutUs.svg"
            alt="about us"
            className="mt-36 aspect-[48/31] w-full object-cover"
          />
        </div>
      </Container>
    </div>
  );
}
