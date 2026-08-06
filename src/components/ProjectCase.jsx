import React, { useEffect, useRef, useState } from 'react';
import '../styles/Projects.css';

const ProjectCase = ({
  title,
  layout = 'web',
  heroImage,
  galleryImages,
  video,
  secondaryVideo,
  tagline,
  context,
  role,
  features,
  stack,
  result,
}) => {
  const sectionRef = useRef(null);
  const primaryVideoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [primaryVideoFailed, setPrimaryVideoFailed] = useState(false);
  const [secondaryVideoFailed, setSecondaryVideoFailed] = useState(false);
  const safeHeroImage = heroImage ?? { src: '', alt: '' };
  const safeGalleryImages = Array.isArray(galleryImages) ? galleryImages : [];
  const safeVideo = video ?? { poster: '', alt: '', sources: [] };
  const safeSecondaryVideo = secondaryVideo ?? null;
  const safeFeatures = Array.isArray(features) ? features : [];
  const safeStack = Array.isArray(stack) ? stack : [];

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px 0px -10%',
        threshold: 0.25,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const videoNode = primaryVideoRef.current;
    if (!videoNode || typeof videoNode.play !== 'function') return;

    if (isVisible && !primaryVideoFailed) {
      const playPromise = videoNode.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Lecture bloquée par le navigateur, on garde le poster
        });
      }
    } else if (typeof videoNode.pause === 'function') {
      videoNode.pause();
    }
  }, [isVisible, primaryVideoFailed]);

  return (
    <article className={`project-case project-case-${layout}`} ref={sectionRef}>
      <div className="project-hero">
        <img src={safeHeroImage.src} alt={safeHeroImage.alt} loading="lazy" />
      </div>

      <div className="project-grid">
        <div className="project-media">
          <div className={`project-gallery ${layout === 'mobile' ? 'project-gallery-mobile' : 'project-gallery-web'}`}>
            {safeGalleryImages.map((item, index) => (
              <div key={index} className="project-gallery-item">
                <img src={item.src} alt={item.alt} loading="lazy" />
              </div>
            ))}
          </div>

          <div className="project-video">
            <h4>Vidéo principale</h4>
            {!primaryVideoFailed ? (
              <video
                ref={primaryVideoRef}
                className="project-video-player"
                poster={safeVideo.poster}
                preload="metadata"
                muted
                loop
                playsInline
                controls
                aria-label={safeVideo.alt}
                onError={() => setPrimaryVideoFailed(true)}
                onLoadedData={() => setPrimaryVideoFailed(false)}
              >
                {safeVideo.sources.map((source, index) => (
                  <source key={index} src={source.src} type={source.type} />
                ))}
                Votre navigateur ne prend pas en charge la lecture vidéo.
              </video>
            ) : (
              <div className="project-video-fallback">
                <img src={safeVideo.poster} alt={safeVideo.alt} loading="lazy" />
                <div className="project-video-fallback-text">
                  <strong>Vidéo indisponible</strong>
                  <p>Affichage de l’image de présentation à la place.</p>
                </div>
              </div>
            )}
          </div>

          {safeSecondaryVideo && (
            <div className="project-video-secondary">
              <h4>{safeSecondaryVideo.label || 'Vidéo secondaire'}</h4>
              {!secondaryVideoFailed ? (
                <video
                  className="project-video-player"
                  poster={safeSecondaryVideo.poster}
                  preload="metadata"
                  muted
                  loop
                  playsInline
                  controls
                  aria-label={safeSecondaryVideo.alt}
                  onError={() => setSecondaryVideoFailed(true)}
                  onLoadedData={() => setSecondaryVideoFailed(false)}
                >
                  {safeSecondaryVideo.sources.map((source, index) => (
                    <source key={index} src={source.src} type={source.type} />
                  ))}
                  Votre navigateur ne prend pas en charge la lecture vidéo.
                </video>
              ) : (
                <div className="project-video-fallback">
                  <img src={safeSecondaryVideo.poster} alt={safeSecondaryVideo.alt} loading="lazy" />
                  <div className="project-video-fallback-text">
                    <strong>Vidéo indisponible</strong>
                    <p>Affichage de l’image de présentation à la place.</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="project-summary">
          <div className="project-label">
            <span className="project-tag">Projet</span>
            <h3>{title}</h3>
          </div>
          <p className="project-tagline">{tagline}</p>
          <div className="project-meta">
            <div>
              <h4>Contexte</h4>
              <p>{context}</p>
            </div>
            <div>
              <h4>Rôle</h4>
              <p>{role}</p>
            </div>
          </div>

          <div className="project-features-block">
            <h4>Fonctionnalités clés</h4>
            <ul className="project-features">
              {safeFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="project-stack-block">
            <h4>Stack technique</h4>
            <div className="project-stack">
              {safeStack.map((item, index) => (
                <span key={index} className="project-badge">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="project-result">
            <h4>Résultat</h4>
            <p>{result}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCase;
