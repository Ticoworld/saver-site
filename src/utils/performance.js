import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor frame rate
    let frames = 0;
    let lastTime = performance.now();
    
    const checkFrameRate = () => {
      frames++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frames * 1000) / (currentTime - lastTime));
        
        if (fps < 50) {
          console.warn(`Low FPS detected: ${fps} fps`);
        }
        
        frames = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(checkFrameRate);
    };
    
    requestAnimationFrame(checkFrameRate);
    
    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const longTasks = list.getEntries();
          longTasks.forEach((task) => {
            if (task.duration > 50) {
              console.warn(`Long task detected: ${task.duration}ms`);
            }
          });
        });
        
        observer.observe({ entryTypes: ['longtask'] });
        
        return () => observer.disconnect();
      } catch {
        // PerformanceObserver not supported
      }
    }
  }, []);
};

export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
