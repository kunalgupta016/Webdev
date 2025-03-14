import React from 'react'
import {motion,useScroll} from 'motion/react';

const App = () => {
  
  const scrollYprogress =  useScroll().scrollYProgress

  
  return (
    <div className='p-20 text-center text-white font-mono'>

      <motion.div  
      className='box'

      // animate={{

      //   x:[0,800,800,0,0],
      //   y:[0,0,800,800,0],
      //   rotate:[0,360,0,-360,0]

      // }}

      // transition={{
      //   duration:6,
      //   delay:1,
      //   repeat:Infinity,
      //   ease:'anticipate'
      // }}

      // whileHover={{
      //   backgroundColor:'green'
      // }}
      // // whileTap={{
      // //   scale:0.8
      // // }}
      // drag

      // whileDrag={{
      //   scale:0.8,
      //   // cursor:'pointer'
      // }}

      // dragConstraints={{
      //   left:0,
      //   top:0,
      //   // right:500,
      //   bottom:500
      // }}
      // dragDirectionLock='true'
      >

      </motion.div>

        {/* <motion.div 
        className='bg-red-500 origin-left   w-full h-3 fixed top-0 left-0'
        style={{
          scaleX:scrollYprogress
        }}
        ></motion.div>

      <h1 className='text-4xl font-mono font-bold'>Hello Guys In Framer Motion</h1>
      <p><br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores perspiciatis magni mollitia ex, nisi temporibus hic, cum velit ratione nam natus autem. Eveniet eligendi optio beatae itaque deserunt sit veritatis possimus eaque accusantium similique, tempore harum! Maiores porro aspernatur esse, praesentium dolores consectetur reprehenderit sint atque et assumenda ea vero, ad exercitationem quod quaerat, possimus reiciendis inventore natus magnam quas debitis tempore aliquam dolor dolorum. Dolore quasi facere aliquam accusamus enim provident totam assumenda beatae quod officia adipisci alias eligendi libero, odio cum ducimus repellat iusto obcaecati officiis earum ipsa, dignissimos quisquam culpa! Cumque deleniti, odio dignissimos porro et dolore beatae quod quas eligendi odit quisquam nulla repellendus fuga! Natus nisi accusamus a quos quas doloremque itaque reiciendis expedita quasi dolorem fuga at ad, inventore impedit voluptatibus fugit! Vel praesentium quam sapiente fuga, ipsa provident, cupiditate nesciunt odit maxime numquam rerum accusamus consectetur tempora, asperiores explicabo consequuntur. Fugiat, perferendis tenetur. Cumque ea dolorem ex laudantium, omnis nisi vitae consectetur officiis, impedit veritatis ipsam assumenda velit libero aut distinctio beatae perferendis sed repudiandae tempora tempore expedita hic. Nemo laudantium molestiae incidunt dolores reiciendis tempore? Eligendi necessitatibus pariatur sed laboriosam dolorum, voluptates maiores quia dolores, temporibus assumenda quam minus deserunt commodi sapiente. <br /><br /><br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores soluta in voluptate aperiam distinctio numquam, quasi quam obcaecati optio corporis dolores ad. Alias atque enim doloremque fugit cum! Maiores unde aut perspiciatis, officiis doloremque deleniti eligendi dignissimos quam eos consequuntur iure harum dolorum cupiditate quaerat commodi, quae inventore, sequi possimus ullam sint dicta explicabo. Harum porro ab nisi excepturi, alias autem iure ducimus! Ad officia architecto nam necessitatibus enim voluptatum, perspiciatis ipsa quos ullam cupiditate repellat unde earum? Ut expedita provident aliquid ab animi, eos nesciunt nemo corporis nam laboriosam maxime odio ipsam numquam dolore neque velit hic officiis nostrum suscipit tempora quasi. Quisquam debitis nisi, rem inventore totam quas. Delectus repellat id est fugiat hic aspernatur unde commodi quidem nisi ipsam? Nisi numquam harum tempore sed quasi non ut ad maxime veritatis perferendis, modi ex, architecto aut amet obcaecati. Facilis quos unde doloribus, cum nulla placeat libero quis fuga accusantium iure velit incidunt suscipit perspiciatis reprehenderit labore aperiam dolorem enim reiciendis exercitationem at commodi eos. Fugit iure incidunt deleniti in, doloribus similique veritatis magnam, corporis voluptate rerum cupiditate. Minus itaque quidem iure alias dolore fuga unde ipsum eveniet eos laboriosam aspernatur obcaecati, libero error atque, vero in optio natus beatae earum accusamus aliquam, eius veniam explicabo quo. Consequuntur eum, molestiae voluptate odit vitae totam ratione labore et eveniet, obcaecati nam quo ullam, distinctio consequatur. <br /><br /><br /><br />Optio minus, temporibus rerum quibusdam ipsum quidem excepturi voluptatibus doloribus distinctio provident dolore voluptatum repudiandae? Fugiat laboriosam, ipsum ipsam, voluptates aliquam accusamus labore quaerat iusto perspiciatis nihil excepturi dolorem similique repudiandae assumenda vel repellendus perferendis, distinctio maiores illum odio exercitationem quibusdam deleniti voluptatum! Distinctio aliquam, itaque cumque illum dolor vel repellendus esse culpa labore. Blanditiis perferendis aliquid fugit doloremque, sequi temporibus sed eum qui quibusdam iste dolorem asperiores labore omnis sit cum voluptate ipsum quo.</p> */}


      {/* <motion.div 
      className="circle"
      animate={{
        x:400,
        scale:0.5,
        rotate:360
      }}
      
      >

      </motion.div> */}



    </div>
  )
}

export default App
