'use client';

import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import type { CaseStudyProject } from './CaseStudies';

const stepConfig = [
  { key: 'problem', icon: '🔍', number: '01' },
  { key: 'understanding', icon: '📊', number: '02' },
  { key: 'solutions', icon: '💡', number: '03' },
  { key: 'prototype', icon: '🎨', number: '04' },
  { key: 'testing', icon: '🧪', number: '05' },
  { key: 'launch', icon: '🚀', number: '06' },
] as const;

interface Props {
  study: CaseStudyProject;
  onClose: () => void;
}

export default function CaseStudyDetail({ study, onClose }: Props) {
  const steps = stepConfig.map((cfg) => ({
    ...cfg,
    ...study.caseStudy[cfg.key],
  }));

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-3xl my-8 mx-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 mt-4 z-20 w-10 h-10 rounded-full bg-dark/80 hover:bg-dark text-white flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <IoClose size={20} />
        </button>

        {/* Hero Image */}
        <div className="relative w-full aspect-video bg-gray-100">
          <Image
            src={study.thumbnail}
            alt={study.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Header */}
        <div className="px-8 md:px-12 pt-10 pb-6">
          <p className="text-xs text-sage-dark font-body tracking-wider uppercase mb-3">
            {study.role} · {study.duration}
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-dark leading-tight mb-4">
            {study.title}
          </h2>
          <p className="text-muted font-body text-sm leading-relaxed">
            {study.summary}
          </p>

          {/* Tech Stack (subtle) */}
          <div className="flex flex-wrap gap-1.5 mt-6">
            {study.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-gray-100 text-muted text-[10px] font-body tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-gray-200" />

        {/* Case Study Steps */}
        <div className="px-8 md:px-12 py-10 space-y-12">
          {steps.map((step) => (
            <div key={step.key} className="relative pl-8 border-l-2 border-sage/40">
              {/* Step Number Badge */}
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-sage flex items-center justify-center">
                <span className="text-[9px] font-body font-bold text-dark">
                  {step.number}
                </span>
              </div>

              <p className="text-[10px] text-sage-dark font-body tracking-widest uppercase mb-1">
                Step {step.number}
              </p>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-dark mb-3">
                {step.icon} {step.title}
              </h3>
              <p className="text-muted font-body text-sm leading-relaxed">
                {step.content}
              </p>

              {/* Evidence callout */}
              {step.evidence && (
                <div className="mt-4 p-4 bg-sage/10 border-l-4 border-sage-dark">
                  <p className="text-xs font-body text-dark/80 leading-relaxed">
                    <span className="font-bold">📌 Evidence: </span>
                    {step.evidence}
                  </p>
                </div>
              )}

              {/* Key Insight callout */}
              {step.keyInsight && (
                <div className="mt-4 p-4 bg-amber-50 border-l-4 border-amber-400">
                  <p className="text-xs font-body text-dark/80 leading-relaxed">
                    <span className="font-bold">💡 Key Insight: </span>
                    {step.keyInsight}
                  </p>
                </div>
              )}

              {/* Metrics */}
              {step.metrics && step.metrics.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  {step.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="text-center p-4 bg-gray-50 border border-gray-200"
                    >
                      <p className="text-2xl font-heading font-black text-sage-dark">
                        {metric.value}
                      </p>
                      <p className="text-xs font-body font-bold text-dark mt-1">
                        {metric.label}
                      </p>
                      <p className="text-[10px] font-body text-muted mt-0.5">
                        {metric.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Launch Strategy */}
              {step.strategy && (
                <div className="mt-4 p-4 bg-sage/10 border-l-4 border-sage-dark">
                  <p className="text-xs font-body text-dark/80 leading-relaxed">
                    <span className="font-bold">🎯 Go-to-Market: </span>
                    {step.strategy}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-8 md:px-12 py-8 bg-gray-50 border-t border-gray-200">
          <p className="text-center text-muted font-body text-xs">
            Want to discuss this project?{' '}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 300);
              }}
              className="text-sage-dark font-bold hover:underline"
            >
              Let&apos;s connect →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
