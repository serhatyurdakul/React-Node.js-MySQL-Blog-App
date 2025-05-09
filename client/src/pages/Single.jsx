import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img
          src='https://images.pexels.com/photos/30953505/pexels-photo-30953505/free-photo-of-tokyo-nun-kentsel-bolgesinde-buyuleyici-sokak-manzarasi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
        <div className='user'>
          <img
            src='https://images.pexels.com/photos/4618494/pexels-photo-4618494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
          <div className='info'>
            <span>Serhat</span>
            <p>Posted 2 days ago</p>
          </div>

          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <img src='/img/edit.png' alt='' />
            </Link>
            <img src='/img/delete.png' alt='' />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
            facere eos distinctio eaque veritatis molestias soluta facilis
            eligendi, repellat ratione dicta esse laudantium quas nulla
            expedita? Nam autem consequuntur, totam laboriosam ut inventore
            impedit. Adipisci harum assumenda eligendi minus numquam voluptas
            voluptatem exercitationem magni expedita cumque tempora velit quae
            rerum inventore, quod distinctio nostrum quasi architecto sequi
            deleniti est. Perspiciatis sapiente id mollitia non odit vitae
            voluptatum, dolorem magnam laudantium!
          </p>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            placeat ut? At in possimus impedit temporibus vel perspiciatis enim
            totam aperiam iusto veniam eius eaque id quia maxime dignissimos
            voluptates labore vitae, laboriosam tempore voluptate quos.
            Veritatis praesentium ex qui eum exercitationem vitae doloribus quam
            nostrum reprehenderit quasi dolorem, nulla, impedit blanditiis
            aliquam eaque quibusdam voluptatibus. Nam harum perspiciatis autem
            repellendus nihil, quasi architecto delectus est rerum a totam hic
            commodi ut libero eum. Deserunt dignissimos ad enim tempore totam?
          </p>
          <br />
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            optio similique quidem totam aliquam vero veniam deserunt dolore,
            dicta obcaecati accusantium quo non provident ad eaque culpa neque
            beatae? Quo, necessitatibus eius ea provident aliquam blanditiis
            quibusdam, vel atque saepe debitis molestias recusandae ratione
            deleniti in architecto maxime. Ullam, animi? Aspernatur fuga fugit
            facilis atque, nobis nihil officiis inventore aliquid. Impedit rem
            fugiat, laborum aut dicta dignissimos ratione animi quae quisquam
            facilis corrupti voluptates, expedita maiores iusto eos? Vel beatae
            sed natus porro. Voluptatum molestiae voluptas quos ad non placeat,
            nobis, quis corrupti pariatur, iste doloremque quidem optio dolore
            natus?
          </p>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
