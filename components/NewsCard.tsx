import React from 'react';

export interface NewsCardProps {
    title: string;
    category: string;
    timeAgo: string;
    imageUrl?: string;
    description?: string;
    onClick?: () => void;
    variant?: 'hero' | 'standard' | 'wide';
    className?: string;
    categoryColor?: string;
    breaking?: boolean;
    children?: React.ReactNode;
}

const NewsCard: React.FC<NewsCardProps> = ({
    title,
    category,
    timeAgo,
    imageUrl,
    description,
    onClick,
    variant = 'standard',
    className = '',
    categoryColor = 'text-gray-400',
    breaking = false,
    children
}) => {

    const baseClasses = "glass-card rounded-2xl relative overflow-hidden group cursor-pointer transition-all hover:border-white/30";

    const variantClasses = {
        hero: "min-h-[400px] md:col-span-2 row-span-2",
        standard: "min-h-[240px] col-span-1",
        wide: "min-h-[240px] col-span-1 md:col-span-2",
    };

    return (
        <div
            onClick={onClick}
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        >
            {/* Background Image */}
            {imageUrl && (
                <>
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url("${imageUrl}")` }}
                    />
                    <div className={`absolute inset-0 ${variant === 'hero' ? 'bg-gradient-to-t from-black via-black/50 to-transparent opacity-90' : 'bg-black/20 group-hover:bg-transparent transition-all'}`}></div>
                    {/* Wide card specific gradient */}
                    {variant === 'wide' && <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>}
                </>
            )}

            {/* Content */}
            <div className={`absolute ${variant === 'hero' || variant === 'wide' ? 'bottom-0 left-0 p-6 md:p-8 w-full' : 'bottom-0 left-0 p-4 w-full flex flex-col justify-end h-full'}`}>

                {/* Breaking Badge (Hero only usually) */}
                {breaking && (
                    <div className="absolute top-4 left-4 md:top-[-300px] md:left-0 relative mb-auto">
                        {/* Note: Positioning logic acts differently depending on card structure. 
                 For simplified refactor, we keep it simple. For Hero, it was top-left absolute.
             */}
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-primary-purple/20 text-primary-purple border border-primary-purple/30 backdrop-blur-md mb-4">
                            BREAKING
                        </span>
                    </div>
                )}

                <div className={`flex items-center gap-2 mb-2 ${variant === 'hero' || variant === 'wide' ? 'mb-3' : ''}`}>
                    <span className={`${categoryColor} font-mono text-xs uppercase tracking-wider`}>{category}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                    <span className="text-gray-500 font-mono text-xs">{timeAgo}</span>
                </div>

                <h3 className={`font-bold text-white transition-colors leading-tight group-hover:${categoryColor} ${variant === 'hero' ? 'text-3xl md:text-4xl mb-3' :
                    variant === 'wide' ? 'text-2xl mb-3' :
                        'text-base mb-2'
                    }`}>
                    {title}
                </h3>

                {description && (
                    <p className={`text-gray-300 line-clamp-2 ${variant === 'hero' ? 'max-w-xl text-sm md:text-base leading-relaxed' : 'text-sm text-gray-400'}`}>
                        {description}
                    </p>
                )}

                {/* Wide card extra button */}
                {variant === 'wide' && (
                    <button className="mt-4 self-start flex items-center gap-2 text-xs font-mono font-bold text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors border border-white/5">
                        Read Analysis <span className="icon text-[14px]">arrow_forward</span>
                    </button>
                )}
                {children}
            </div>
            {/* Hero Breaking Badge - Absolute positioning override for Hero standard structure */}
            {breaking && variant === 'hero' && (
                <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-primary-purple/20 text-primary-purple border border-primary-purple/30 backdrop-blur-md">
                        BREAKING
                    </span>
                </div>
            )}
        </div>
    );
};

export default NewsCard;
