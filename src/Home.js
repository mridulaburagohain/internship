import Introduction from "./introduction";
import Specialization from "./specialization";
import Start from "./start";
import Requirements from "./requirments";
import Top_universities from "./top_universities";

const Home=()=>{
    return (
        <div className="Home">
        <div className="Start">
            <Start />
        </div>
        <div className="Introduction">
           <Introduction />

        </div>
        <div className="specializations">
            <Specialization />
        </div>
        <div className="Requirements">
             <Requirements />
        </div>
        <div className="Top_universities">
             <Top_universities />
        </div>
        </div>
    )
  }
  
  export default Home;