import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function RecentPosts(){
    return (
        <Section2 isFancy = {true}>
            <Heading>Posting terbaru</Heading>
            <Post
                title="Cita Rasa Lisbon"
                body="...those pasteis de nata"
            />
            <Post
                title="Bueso Aires dalam irama tango"
                body="Saya menyukainya"
            />    
        </Section2>
    );
}