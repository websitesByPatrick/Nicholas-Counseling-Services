import MainContent from "./mainContent";
import NoteCardRightPic from "../noteCard/noteCardRightPic";
import NoteCardLeftPic from "../noteCard/noteCardLeftPic";
import styles from './contents.module.css'

const Contents = () => {
  return (

      <MainContent className={styles.MainContent}>
        <NoteCardRightPic
          title="What is Mental Health"
          text={[
            "Mental refers to the emotional, psychological, and social well-being of an individual. It affects how people think, feel, and act, as well as how they handle stress, relate to others, and make choices. Mental health is crucial at every stage of life, from childhood and adolescence through adulthood.",
            " Key aspects of mental health include:",
            "1. Emotional well-being: The ability to cope with life’s challenges and manage emotions effectively.",
            "2. Psychological resilience: The capacity to recover from difficulties and adapt to change.",
            "3. Social well-being: The quality of relationships and social networks that provide support and connection.",
            "Good mental health contributes to overall well-being and is influenced by various factors, including genetics, environment, life experiences, and family history. Promoting mental health can involve self-care practices, professional therapy, support from friends and family, and, when necessary, medical intervention.",
          ]}
          img="./mentalHealth.png"
        />

        <NoteCardLeftPic
          title="How Can A Counselor Help"
          text1="If Marica is a mental health counselor, her role likely involves providing emotional support, therapeutic guidance, and coping strategies to help individuals improve their mental well-being. Specific responsibilities could include:

Assessment: Evaluating clients’ mental health needs through interviews, questionnaires, or observations to understand their concerns.

Therapeutic Support: Using evidence-based counseling techniques (e.g., cognitive-behavioral therapy, mindfulness, or person-centered approaches) to address issues like anxiety, depression, trauma, or relationship challenges.

Developing Treatment Plans: Collaborating with clients to set achievable goals and tailor interventions to their specific needs.

Providing Education: Teaching clients about mental health, coping skills, emotional regulation, and strategies to handle stress or challenges.

Crisis Intervention: Assisting clients during urgent mental health crises, such as suicidal thoughts, panic attacks, or severe emotional distress.

Referral Services: Connecting clients with additional resources like psychiatrists, support groups, or community programs when necessary.

Ongoing Support: Building a trusting relationship with clients to foster long-term growth and emotional resilience."
          img="./counseling.jpg"
        />
      </MainContent>
   

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
