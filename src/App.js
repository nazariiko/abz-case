import Header from './layout/Header';
import PromoSection from './layout/PromoSection';
import GetRequestSection from './layout/GetRequestSection';
import SignUpSection from './layout/SignUpSection';

function App() {
  return (
    <div className="sections-container">
      <Header />
      <PromoSection />
      <GetRequestSection />
      <SignUpSection />
    </div>
  );
}

export default App;
