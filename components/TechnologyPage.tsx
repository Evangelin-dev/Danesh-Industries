import React from 'react';

const technologies = [
    { name: 'SolidWorks', description: 'For 3D modeling and design.', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/SolidWorks_Logo.svg' },
    { name: 'Mastercam', description: 'For process automation.', image: 'https://www.mastercam.com/wp-content/uploads/2020/05/Mastercam-Logo.png' },
    { name: 'FARO Arm', description: 'For precision measurement.', image: 'https://www.faro.com/wp-content/uploads/2020/01/FARO-Logo.png' },
    { name: 'PMI & Mobile Spectro', description: 'For material analysis.', image: 'https://www.spectro.com/fileadmin/_processed_/csm_Spectro_Logo_2018_RGB_300dpi_01_1c8b8b8b8b.png' },
    { name: 'Hydro Testing', description: 'For final validation.', image: 'https://img.icons8.com/ios-filled/50/000000/test-tube.png' },
];

const TechnologyPage: React.FC = () => {
    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes tech-slideshow {
                        0% { background-image: url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop'); }
                        11.11% { background-image: url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop'); }
                        22.22% { background-image: url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop'); }
                        33.33% { background-image: url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop'); }
                        44.44% { background-image: url('https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2070&auto=format&fit=crop'); }
                        55.55% { background-image: url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'); }
                        66.66% { background-image: url('https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=2070&auto=format&fit=crop'); }
                        77.77% { background-image: url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop'); }
                        88.88% { background-image: url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop'); }
                        100% { background-image: url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop'); }
                    }
                    @keyframes fade-in {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-fade-in {
                        animation: fade-in 0.6s ease-out forwards;
                        opacity: 0;
                    }
                    @keyframes spin-in {
                        from { transform: rotate(0deg) scale(0); }
                        to { transform: rotate(360deg) scale(1); }
                    }
                    .animate-spin-in {
                        animation: spin-in 0.8s ease-out forwards;
                        opacity: 0;
                    }
                    @keyframes solidworks-glow {
                        0%, 100% { box-shadow: 0 0 15px rgba(138, 43, 226, 0.4), 0 0 30px rgba(138, 43, 226, 0.2); }
                        50% { box-shadow: 0 0 25px rgba(138, 43, 226, 0.8), 0 0 50px rgba(138, 43, 226, 0.4), 0 0 75px rgba(138, 43, 226, 0.2); }
                    }
                    .solidworks-highlight:hover {
                        background: linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(147, 112, 219, 0.05));
                        border: 2px solid rgba(138, 43, 226, 0.3);
                        box-shadow: 0 8px 25px rgba(138, 43, 226, 0.15);
                        transform: scale(1.02);
                    }
                    .solidworks-icon:hover {
                        animation: solidworks-glow 2s ease-in-out infinite;
                        background: linear-gradient(135deg, #8A2BE2, #9370DB);
                        transform: scale(1.1) rotate(5deg);
                    }
                    .solidworks-title:hover {
                        color: #8A2BE2 !important;
                        text-shadow: 0 0 10px rgba(138, 43, 226, 0.5);
                        font-weight: 700;
                    }
                    @keyframes mastercam-glow {
                        0%, 100% { box-shadow: 0 0 15px rgba(255, 183, 143, 0.4), 0 0 30px rgba(255, 183, 143, 0.2); }
                        50% { box-shadow: 0 0 25px rgba(255, 183, 143, 0.8), 0 0 50px rgba(255, 183, 143, 0.4), 0 0 75px rgba(255, 183, 143, 0.2); }
                    }
                    .mastercam-highlight:hover {
                        background: linear-gradient(135deg, rgba(255, 183, 143, 0.1), rgba(255, 160, 122, 0.05));
                        border: 2px solid rgba(255, 183, 143, 0.3);
                        box-shadow: 0 8px 25px rgba(255, 183, 143, 0.15);
                        transform: scale(1.02);
                    }
                    .mastercam-icon:hover {
                        animation: mastercam-glow 2s ease-in-out infinite;
                        background: linear-gradient(135deg, #FFB78F, #FFA07A);
                        transform: scale(1.1) rotate(5deg);
                    }
                    .mastercam-title:hover {
                        color: #FFB78F !important;
                        text-shadow: 0 0 10px rgba(255, 183, 143, 0.5);
                        font-weight: 700;
                    }
                    @keyframes faro-glow {
                        0%, 100% { box-shadow: 0 0 15px rgba(255, 193, 7, 0.4), 0 0 30px rgba(255, 193, 7, 0.2); }
                        50% { box-shadow: 0 0 25px rgba(255, 193, 7, 0.8), 0 0 50px rgba(255, 193, 7, 0.4), 0 0 75px rgba(255, 193, 7, 0.2); }
                    }
                    .faro-highlight:hover {
                        background: linear-gradient(135deg, rgba(255, 193, 7, 0.1), rgba(255, 235, 59, 0.05));
                        border: 2px solid rgba(255, 193, 7, 0.3);
                        box-shadow: 0 8px 25px rgba(255, 193, 7, 0.15);
                        transform: scale(1.02);
                    }
                    .faro-icon:hover {
                        animation: faro-glow 2s ease-in-out infinite;
                        background: linear-gradient(135deg, #FFC107, #FFEB3B);
                        transform: scale(1.1) rotate(5deg);
                    }
                    .faro-title:hover {
                        color: #FFC107 !important;
                        text-shadow: 0 0 10px rgba(255, 193, 7, 0.5);
                        font-weight: 700;
                    }
                    @keyframes pmi-glow {
                        0%, 100% { box-shadow: 0 0 15px rgba(255, 193, 7, 0.4), 0 0 30px rgba(255, 193, 7, 0.2); }
                        50% { box-shadow: 0 0 25px rgba(255, 193, 7, 0.8), 0 0 50px rgba(255, 193, 7, 0.4), 0 0 75px rgba(255, 193, 7, 0.2); }
                    }
                    .pmi-highlight:hover {
                        background: linear-gradient(135deg, rgba(255, 193, 7, 0.1), rgba(255, 235, 59, 0.05));
                        border: 2px solid rgba(255, 193, 7, 0.3);
                        box-shadow: 0 8px 25px rgba(255, 193, 7, 0.15);
                        transform: scale(1.02);
                    }
                    .pmi-icon:hover {
                        animation: pmi-glow 2s ease-in-out infinite;
                        background: linear-gradient(135deg, #FFC107, #FFEB3B);
                        transform: scale(1.1) rotate(5deg);
                    }
                    .pmi-title:hover {
                        color: #FFC107 !important;
                        text-shadow: 0 0 10px rgba(255, 193, 7, 0.5);
                        font-weight: 700;
                    }
                    @keyframes hydro-glow {
                        0%, 100% { box-shadow: 0 0 15px rgba(255, 193, 7, 0.4), 0 0 30px rgba(255, 193, 7, 0.2); }
                        50% { box-shadow: 0 0 25px rgba(255, 193, 7, 0.8), 0 0 50px rgba(255, 193, 7, 0.4), 0 0 75px rgba(255, 193, 7, 0.2); }
                    }
                    .hydro-highlight:hover {
                        background: linear-gradient(135deg, rgba(255, 193, 7, 0.1), rgba(255, 235, 59, 0.05));
                        border: 2px solid rgba(255, 193, 7, 0.3);
                        box-shadow: 0 8px 25px rgba(255, 193, 7, 0.15);
                        transform: scale(1.02);
                    }
                    .hydro-icon:hover {
                        animation: hydro-glow 2s ease-in-out infinite;
                        background: linear-gradient(135deg, #FFC107, #FFEB3B);
                        transform: scale(1.1) rotate(5deg);
                    }
                    .hydro-title:hover {
                        color: #FFC107 !important;
                        text-shadow: 0 0 10px rgba(255, 193, 7, 0.5);
                        font-weight: 700;
                    }
                `
            }} />
            <div className="bg-brand-light py-20 relative" style={{ backgroundSize: 'cover', backgroundPosition: 'center', animation: 'tech-slideshow 16s infinite' }}>
                <div className="absolute inset-0 bg-white opacity-50"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="text-4xl font-extrabold text-brand-dark">Our Technology</h1>
                        <p className="mt-4 text-lg text-brand-gray">We Integrating advanced tools and software into our processes.</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <ul className="space-y-4">
                            {technologies.map((tech, index) => (
                                <li key={index} className={`bg-white p-6 rounded-lg shadow-sm flex items-center space-x-6 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in ${tech.name === 'SolidWorks' ? 'solidworks-highlight' : ''} ${tech.name === 'Mastercam' ? 'mastercam-highlight' : ''} ${tech.name === 'FARO Arm' ? 'faro-highlight' : ''} ${tech.name === 'PMI & Mobile Spectro' ? 'pmi-highlight' : ''} ${tech.name === 'Hydro Testing' ? 'hydro-highlight' : ''}`} style={{ animationDelay: `${0.2 + index * 0.15}s` }}>
                                    <div className={`flex-shrink-0 h-12 w-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-2xl animate-spin-in overflow-hidden ${tech.name === 'SolidWorks' ? 'solidworks-icon' : ''} ${tech.name === 'Mastercam' ? 'mastercam-icon' : ''} ${tech.name === 'FARO Arm' ? 'faro-icon' : ''} ${tech.name === 'PMI & Mobile Spectro' ? 'pmi-icon' : ''} ${tech.name === 'Hydro Testing' ? 'hydro-icon' : ''}`} style={{ animationDelay: `${0.4 + index * 0.15}s` }}>
                                        {tech.image ? <img src={tech.image} alt={tech.name} className="h-8 w-8 object-contain" /> : index + 1}
                                    </div>
                                    <div>
                                        <h3 className={`text-xl font-semibold text-brand-blue hover:text-brand-dark transition-colors duration-300 ${tech.name === 'SolidWorks' ? 'solidworks-title' : ''} ${tech.name === 'Mastercam' ? 'mastercam-title' : ''} ${tech.name === 'FARO Arm' ? 'faro-title' : ''} ${tech.name === 'PMI & Mobile Spectro' ? 'pmi-title' : ''} ${tech.name === 'Hydro Testing' ? 'hydro-title' : ''}`}>{tech.name}</h3>
                                        <p className="text-brand-dark">{tech.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TechnologyPage;
