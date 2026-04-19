





function showcontent() {
        const select = document.getElementById('ui');
        const val = select ? select.value : '';
        switch(val){
                case '1': showcontent1(); break;
                case '2': showcontent2(); break;
                case '3': showcontent3(); break;
                case '4': showcontent4(); break;
                case '5': showcontent5(); break;
                default: document.getElementById('content').innerHTML = '';
        }
}

function showcontent1(){

                const html = `
                
                <h2 id="content1">Burns</h2>
                <h4>Causes</h4>
                <ul id="you">
                        <li>Contact with heat, hot liquids, chemicals, or electricity.</li>
                </ul>
                <h4>Recommended medications and treatment</h4>
                <ul id="we">
                        <li>First aid: cool the area with cold running water for 10–20 minutes (do not apply ice directly).</li>
                        <li>Pain relief: paracetamol or ibuprofen as needed (follow dosing instructions).</li>
                        <li>For superficial burns: clean gently, apply antiseptic and a non-stick dressing. Seek medical care for large or deep burns.</li>
                </ul>`;
        const video = `
                
                <p><a class="video-link" href="https://www.youtube.com/results?search_query=first+aid+burns" target="_blank" rel="noopener">Watch burns first-aid videos on YouTube</a></p>`;
                const picture = `
                <img src="burns.jpg" alt="Burns First Aid" class="content-image">
                <img src="images.jpg" alt="Burns First Aid" class="content-image">`;
        document.getElementById('content').innerHTML = html + video + picture;

}

function showcontent2(){
                const html = `
                <h2 id="content2">Bleeding</h2>
                <h4>Causes</h4>
                <ul>
                        <li>Cuts or lacerations from sharp objects or impacts, torn veins or arteries, or medical conditions affecting clotting.</li>
                </ul>
                <h4>Recommended medications and treatment</h4>
                <ul>
                        <li>Stop bleeding with direct pressure and elevate the injured part if possible.</li>
                        <li>Use sterile dressings and add layers if needed. Call emergency services for severe bleeding.</li>
                        <li>Pain relief: paracetamol is usually safe. Avoid NSAIDs if the patient is on blood thinners unless advised by a doctor.</li>
                </ul>`;
        const video = `
              
                <p><a class="video-link" href="https://www.youtube.com/results?search_query=first+aid+bleeding" target="_blank" rel="noopener">Watch bleeding control videos on YouTube</a></p>`;
                const picture = `
                <img src="male-hand-with-bleeding-laceration-wound-gray-background-closeup_340805-213.jpg" alt="Bleeding First Aid" class="content-image">
                <img src="306267.jpeg.jpg" alt="Bleeding First Aid" class="content-image">`;
        document.getElementById('content').innerHTML = html + video + picture;
}

function showcontent3(){
                const html = `
                <h2 id="content3">Fracture</h2>
                <h4>Causes</h4>
                <ul>
                        <li>Direct trauma or a strong fall, or weakened bones due to osteoporosis or other conditions.</li>
                </ul>
                <h4>Recommended medications and treatment</h4>
                <ul>
                        <li>Immobilize the limb and limit movement with a splint or support until professional help is available.</li>
                        <li>Pain relief: paracetamol or ibuprofen as needed (follow dosing instructions).</li>
                        <li>Definitive treatment may include reduction and/or surgery and follow-up with orthopedics.</li>
                </ul>`;
        const video = `
                
               
        <p  id="took"><a class="video-link" href="https://www.youtube.com/results?search_query=first+aid+fracture+splinting" target="_blank" rel="noopener">Watch fracture care & splinting videos on YouTube</a></p>`;
        const picture = `
        <img src="OI2P.jpg" alt="Fracture First Aid" class="content-image">
        <img src="images (2).jpg" alt="Fracture First Aid" class="content-image">`;
        document.getElementById('content').innerHTML = html + video + picture;
}

function showcontent4(){
                const html = `
                <h2 id="content4">Heart attack</h2>
                <h4>Causes</h4>
                <ul>
                        <li>Blockage of a coronary artery by a blood clot or plaque buildup, reducing blood flow to the heart muscle.</li>
                </ul>
                <h4>Recommended medications and treatment</h4>
                <ul>
                        <li>Call emergency services immediately — this is a medical emergency.</li>
                        <li>If the patient is conscious and not allergic, give a chewable aspirin (after confirming no contraindications).</li>
                        <li>Hospital treatment may include thrombolytics, angioplasty, or surgery depending on evaluation.</li>
                </ul>`;
        const video = `
        

                <p  id="took"><a class="video-link" href="https://www.youtube.com/results?search_query=heart+attack+first+aid+CPR" target="_blank" rel="noopener">Watch heart attack & CPR guidance videos on YouTube</a></p>`;
                const picture = `
                <img src="OIP.jpg" alt="Heart Attack First Aid" class="content-image">
                <img src="aspirin-protect-100mg-30-tab-d4lv-01668675854.jpg" alt="Heart Attack First Aid" class="content-image">`;
        document.getElementById('content').innerHTML = html + video + picture;
}

function showcontent5(){
                const html = `
                <h2 id="content5">Sprain / Strain</h2>
                <h4>Causes</h4>
                <ul>
                        <li>Sudden movement or overloading of muscles or joints, or twisting during sports or activity.</li>
                </ul>
                <h4>Recommended medications and treatment</h4>
                <ul>
                        <li>Follow RICE: Rest, Ice for 15–20 minutes, Compression, Elevation.</li>
                        <li>Pain relief and anti-inflammatories (e.g., ibuprofen) as needed and if appropriate.</li>
                        <li>Physiotherapy and rehabilitation for moderate to severe cases to ensure full recovery.</li>
                </ul>`;
        const video = `
      
        <p id="took"><a class="video-link" href="https://www.youtube.com/results?search_query=sprain+first+aid+exercise" target="_blank" rel="noopener">Watch sprain/strain treatment videos on YouTube</a></p>`;
        const picture = `
        <img src="OIP (1).jpg" alt="Sprain / Strain First Aid" class="content-image">
        <img src="130181-v1.jpg" alt="Sprain / Strain First Aid" class="content-image">`;
        document.getElementById('content').innerHTML = html + video + picture;
}
       
