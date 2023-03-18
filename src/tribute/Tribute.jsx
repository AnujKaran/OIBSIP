import './tribute.css';

const tribute = () => {

    return (<div className="container">

        <div className='container-tri-img'>
            <h5>- Sundar Pichai</h5>
            <h1>Wear your <span>failure</span></h1>
            <h1>as a batch of</h1>
            <h1><span>honour</span></h1>

        </div>
        <div className='container-bio'>
            <h1>BIO-GRAPHY</h1>

            <div className='container-content'>
                <div className='container-bio-text'>
                    <h4>
                        Born in 1972, Sundar Pichai joined Google in 2004 and served in the different departments and at last became CEO in 2015. He is among few Indian-origin individual, who is leading the giant tech company, along with Satya Nadella and Shantanu Narayen.

                    </h4>
                    <div className='container-bio-icons'>
                        <i class="bi bi-youtube"></i>   <i class="bi bi-twitter"></i> <i class="bi bi-instagram"></i>

                    </div>
                </div>
                <div className='container-bio-img'>
                    <img src='g4.jpg' width='100%' height='100%' alt=''></img>
                </div>
            </div>
            <ul>
                <li>Born on 12th July 1972 to parents Lakshmi and Regunatha Pichai in Chennai. Mr. Pichai worked as an engineer for General Electric Company and is a role model to his son.</li>
                <li>Grew up in a modest two-room apartment in Ashok Nagar.</li>
                <li>A former teacher said that Pichai was never a memorable student. Most people don’t remember Pichai from their hay days.</li>
                <li>Studied B.Tech.in Metallurgical Engineering from IIT Kharagpur (West Bengal); graduated 1993.</li>
                <li>Won a scholarship to Stanford University (USA) to study an MS in Material Sciences and Engineering.</li>
                <li>Planned for a Ph.D., but went for an MBA instead.</li>
                <li>Later studied an MBA from the Wharton School of the University of Pennsylvania (USA). He was named a Palmer Scholar and a Siebel Scholar for academic excellence.</li>
                <li>Joined Google in 2004.</li>
                <li>Worked for McKinsey and Company, Applied Materials, and was director of Jive Software from 2011 to 2013. A company providing solutions for communication and collaboration.</li>
                <li>Developed Google Chrome and Google Drive.</li>
            </ul>
        </div>

        <div className='container-ach'>
            <h1>ACHIEVEMENTS</h1>


            <div className='container-content'>
                <img src="sundar.jpg" alt="" />
                <div >
                    <ul>
                        <li>Google CEO Sundar Pichai received the Padma Bhushan award on Friday (December 2, 2022) from the Indian envoy in the US.</li>
                        <li> Pichai accepted the award from India's Ambassador to the US, Taranjit Singh Sandhu, in the presence of his close family members in San Francisco.</li>
                    </ul></div>
            </div>
            <div className='container-content'>

                <div >
                    <ul>
                        <li>As Google's Chief Executive Officer, responsible for product development and technology strategy, as well as the company's day-to-day-operations.</li>
                        <li>  Joined Google in 2004 and helped lead the development of Google Toolbar and Google Chrome, key consumer products which are now used by over 1 billion people.</li>
                    </ul>
                </div>
                <img src="google-img.png" alt="" />
            </div>
        </div>


    </div>)
}

export default tribute;