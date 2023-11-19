
const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
const fortunes = ["good fortune", "success", "love", "prosperity", "health", "happiness", "creativity", "peace", "positive energy", "abundance"];

function generateAstrologyMessage() {
    const randomSign = signs[Math.floor(Math.random() * signs.length)];
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  
    return `For ${randomSign}: Today you will have ${randomFortune}!`;
  }


    
console.log(`
               AAA                                       tttt                                              lllllll                                                               
              A:::A                                   ttt:::t                                              l:::::l                                                               
             A:::::A                                  t:::::t                                              l:::::l                                                               
            A:::::::A                                 t:::::t                                              l:::::l                                                               
           A:::::::::A             ssssssssss   ttttttt:::::ttttttt   rrrrr   rrrrrrrrr      ooooooooooo    l::::l    ooooooooooo      ggggggggg   gggggyyyyyyy           yyyyyyy
          A:::::A:::::A          ss::::::::::s  t:::::::::::::::::t   r::::rrr:::::::::r   oo:::::::::::oo  l::::l  oo:::::::::::oo   g:::::::::ggg::::g y:::::y         y:::::y 
         A:::::A A:::::A       ss:::::::::::::s t:::::::::::::::::t   r:::::::::::::::::r o:::::::::::::::o l::::l o:::::::::::::::o g:::::::::::::::::g  y:::::y       y:::::y  
        A:::::A   A:::::A      s::::::ssss:::::stttttt:::::::tttttt   rr::::::rrrrr::::::ro:::::ooooo:::::o l::::l o:::::ooooo:::::og::::::ggggg::::::gg   y:::::y     y:::::y   
       A:::::A     A:::::A      s:::::s  ssssss       t:::::t          r:::::r     r:::::ro::::o     o::::o l::::l o::::o     o::::og:::::g     g:::::g     y:::::y   y:::::y    
      A:::::AAAAAAAAA:::::A       s::::::s            t:::::t          r:::::r     rrrrrrro::::o     o::::o l::::l o::::o     o::::og:::::g     g:::::g      y:::::y y:::::y     
     A:::::::::::::::::::::A         s::::::s         t:::::t          r:::::r            o::::o     o::::o l::::l o::::o     o::::og:::::g     g:::::g       y:::::y:::::y      
    A:::::AAAAAAAAAAAAA:::::A  ssssss   s:::::s       t:::::t    ttttttr:::::r            o::::o     o::::o l::::l o::::o     o::::og::::::g    g:::::g        y:::::::::y       
   A:::::A             A:::::A s:::::ssss::::::s      t::::::tttt:::::tr:::::r            o:::::ooooo:::::ol::::::lo:::::ooooo:::::og:::::::ggggg:::::g         y:::::::y        
  A:::::A               A:::::As::::::::::::::s       tt::::::::::::::tr:::::r            o:::::::::::::::ol::::::lo:::::::::::::::o g::::::::::::::::g          y:::::y         
 A:::::A                 A:::::As:::::::::::ss          tt:::::::::::ttr:::::r             oo:::::::::::oo l::::::l oo:::::::::::oo   gg::::::::::::::g         y:::::y          
AAAAAAA                   AAAAAAAsssssssssss              ttttttttttt  rrrrrrr               ooooooooooo   llllllll   ooooooooooo       gggggggg::::::g        y:::::y           
                                                                                                                                               g:::::g       y:::::y            
                                                                                                                                       gggggg      g:::::g      y:::::y             
                                                                                                                                       g:::::gg   gg:::::g     y:::::y              
                                                                                                                                        g::::::ggg:::::::g    y:::::y               
                                                                                                                                         gg:::::::::::::g    yyyyyyy                
                                                                                                                                           ggg::::::ggg                             
                                                                                                                                              gggggg                                
`);                         



  console.log(generateAstrologyMessage());