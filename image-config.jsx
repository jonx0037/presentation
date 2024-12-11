import Image1 from '../public/assets/images/image1.jpg';
import Image2 from '../public/assets/images/image2.jpg';
import Image3 from '../public/assets/images/image3.jpg';

function Presentation() {
  return (
    <div>
      <img src={Image1} alt="Image 1" style={{ width: '50%', height: 'auto' }} />
      <img src={Image2} alt="Image 2" style={{ width: '50%', height: 'auto' }} />
      <img src={Image3} alt="Image 3" style={{ width: '50%', height: 'auto' }} />
    </div>
  );
}
// Image1Component.js
import Image1 from '../public/assets/images/Democratic-Platform-Governance.png';

function Image1Component() {
  return (
    <div>
      <img src={Image1} alt="Image 1" style={{ width: '50%', height: 'auto' }} />
    </div>
  );
}

// Image2Component.js
import Image2 from '../public/assets/images/evolution-of-platform-governance.png';

function Image2Component() {
  return (
    <div>
      <img src={Image2} alt="Image 2" style={{ width: '50%', height: 'auto' }} />
    </div>
  );
}
// Image3Component.js
import Image3 from '../public/assets/images/tension-between-free-speech-absolutism-and-practical-moderation.png';

function Image3Component() {
  return (
    <div>
      <img src={Image3} alt="Image 3" style={{ width: '50%', height: 'auto' }} />
    </div>
  );
}
// Presentation.js
// Presentation.js
import Image1Component from './Image1Component';
import Image2Component from './Image2Component';
import Image3Component from './Image3Component';

function Presentation() {
  return (
    <div>
      <Image1Component />
      <Image2Component />
      <Image3Component />
    </div>
  );
}