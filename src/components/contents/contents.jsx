import Sidebar from "./sidebar";
import Pane from "./pane";
import Button from "../button/button";
import MainContent from "./mainContent";
import NoteCardRightPic from "../noteCard/noteCardRightPic";
import NoteCardLeftPic from "../noteCard/noteCardLeftPic";

const Contents = () => {
  return (
    <div className="flex w-11/12 gap-1">
      <Sidebar>
        <Pane icon="./phone.png" text="281-769-2238 ext. 640" />
        <Pane icon="./email.png" text="marica@clearhopewellness.com" />
        <Pane icon="./facebook.png" text="Follow Me On FaceBook" />

        <Button
          text="Book Appointment"
          link="https://www.therapyportal.com/p/clearhope77505/"
        />
      </Sidebar>

      <MainContent>
        <NoteCardRightPic
          title="What is Mental Health"
          text1="Mental health is a state of mental well-being that enables people to cope with the stresses of life, realize their abilities, learn well and work well, and contribute to their community. It has intrinsic and instrumental value and is integral to our well-being."
          img="./mentalHealth.jpg"
        />

        <NoteCardLeftPic
          title="How Can A Counselor Help"
          text1="A Licensed Professional Counselor (LPC) can help with mental health issues by providing a safe space to discuss thoughts and feelings, conducting assessments to identify concerns, developing personalized treatment plans, and offering support to help individuals manage their emotions, improve coping skills, and work towards positive changes in their lives."
          img="./counseling.jpg"
        />
      </MainContent>
    </div>

    /* <ContentOneBlock>
          <section className="text-3xl font-semibold mb-5 border-b pb-5">
            About Me
          </section>
          <p className="text-justify mb-4 text-lg">
            Hi everyone. My name is Marica Nicholas. Thank you for allowing me
            to walk alongside you in your mental health journey. I am currently
            a full time school counselor. I am also a Licensed Professional
            Counselor Associate for Clearhope Counseling and Wellness in
            Tomball, TX. I earned a BAAS from Texas A&M, a Master’s Degree in
            Education from Texas A&M, a Master’s Degree in School Counseling
            from the University of Texas, and a certificate in Mental Health
            Counseling from Lamar University.
          </p>

          <p className="text-justify mb-4 text-lg">
            I have worked in education for 18 years in many roles. I have worked
            with children from pre-k through high school that are from diverse
            backgrounds and different cultures. I believe that all children need
            to know that someone is there for them when they need help. I have
            helped children and adults as they work through trauma, grief, low
            self esteem, abuse, anxiety, behavior challenges, and suicide
            ideation. I have a special place in my heart for senior citizens and
            enjoy working with them as they move into new roles and stages of
            life.
          </p>

          <p className="text-justify mb-4 text-lg">
            My theoretical orientation is primarily eclectic but grounded in
            Person Centered Therapy and Solution Focused Brief Therapy. I
            believe treatment should be holistic and based on what is best for
            the needs of the client. I believe everyone has their own solutions
            inside of them. Some just need help to bring those to the surface.
          </p>

          <p className="text-justify mb-4 text-lg">
            I am a member of the American Counseling Association, active member
            in my church, and enjoy spending time with my family. I am a caring,
            compassionate person that wants to provide my clients with a
            comfortable, safe, and non-judgemental space to begin their healing
            journey. I wholeheartedly believe that God has placed me in this
            role to help others grow and heal. Let me help you get started today
          </p>
        </ContentOneBlock> */
  );
};

export default Contents;
