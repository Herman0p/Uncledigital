const App = () => {
    const [activePage, setActivePage] = useState('home');
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activePage]);

    return (
        <div className="bg-[#1c1d20] min-h-screen font-sans selection:bg-[#455CE9] selection:text-white">
            <Navbar activePage={activePage} setActivePage={setActivePage} />
            <main>
                {activePage === 'home' && <HomePage setActivePage={setActivePage} setSelectedProject={setSelectedProject} />}
                {activePage === 'work' && <WorkPage setActivePage={setActivePage} setSelectedProject={setSelectedProject} />}
                {activePage === 'about' && <AboutPage />}
                {activePage === 'contact' && <ContactPage />}
                {activePage === 'project-detail' && <ProjectDetailPage project={selectedProject} setActivePage={setActivePage} setSelectedProject={setSelectedProject} />}
            </main>
            <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
