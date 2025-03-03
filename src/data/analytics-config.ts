// src/data/analytics-config.ts

/**
 * Google Analytics configuration
 * Replace the measurement ID with your actual GA4 ID
 */
const analyticsConfig = {
    measurementId: "G-49QZC8ZP1X", // Replace with your actual Google Analytics ID
    enabled: import.meta.env.PROD, // Only enable in production by default
};

export default analyticsConfig;