import Slide from "~/components/Slide";
import images from "~/images";
import Story from "./Story";
import Adress from "./Adress";

function Home(){
    return(
        <div>
            <div className="h-fit -z-10 mb-10">
                <Slide data={images.slide.home}/>
            </div>
            <div className="w-full lg:w-container mx-auto">
                <Story/>
            </div>
            <div className="w-full mx-auto">
                <Adress/>
            </div>
            
        </div>
    );
}
export default Home;