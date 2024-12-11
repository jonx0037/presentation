// charts.tsx
import ImageSlideshow from './image-config';

function Charts() {
  return (
    <div>
      <ImageSlideshow />
    </div>
  );
}

export default Charts;
// Presentation.js
import Image1Component from './Image1Component';
import Image2Component from './Image2Component';
import Image3Component from './Image3Component';
import Charts from './charts';
import WorksCited from './WorksCited';

function Presentation() {
  return (
    <div>
      <Image1Component />
      <Image2Component />
      <Image3Component />
      <Charts />
      <WorksCited />
    </div>
  );
}