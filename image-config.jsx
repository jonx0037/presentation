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
// ImageSlideshow.js
import Image1 from '../public/assets/images/Democratic-Platform-Governance.png';
import Image2 from '../public/assets/images/evolution-of-platform-governance.png';
import Image3 from '../public/assets/images/tension-between-free-speech-absolutism-and-practical-moderation.png';

function ImageSlideshow() {
  return (
    <div>
      <h2>Image References</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={Image1} alt="Image 1" style={{ width: '80%', height: 'auto', marginBottom: '20px' }} />
        <img src={Image2} alt="Image 2" style={{ width: '80%', height: 'auto', marginBottom: '20px' }} />
        <img src={Image3} alt="Image 3" style={{ width: '80%', height: 'auto' }} />
      </div>
    </div>
  );
}
// Presentation.js
import Image1Component from './Image1Component';
import Image2Component from './Image2Component';
import Image3Component from './Image3Component';
import ImageSlideshow from './ImageSlideshow';
import WorksCited from './WorksCited';

function Presentation() {
  return (
    <div>
      <Image1Component />
      <Image2Component />
      <Image3Component />
      <ImageSlideshow />
      <WorksCited />
    </div>
  );
}