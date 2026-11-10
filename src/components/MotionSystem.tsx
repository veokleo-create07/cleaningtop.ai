'use client';

import {useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {SplitText} from 'gsap/SplitText';

export default function MotionSystem(){
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger,SplitText);
    const media=gsap.matchMedia();

    media.add('(prefers-reduced-motion: no-preference)',()=>{
      const splits:SplitText[]=[];
      let context:ReturnType<typeof gsap.context>|undefined;
      try{
      context=gsap.context(()=>{
        document.querySelectorAll<HTMLElement>('[data-motion="lines"],.contact-copy h2').forEach(element=>{
          const split=SplitText.create(element,{
            type:'lines',
            mask:'lines',
            autoSplit:true,
            aria:'auto',
            onSplit(instance){
              return gsap.fromTo(instance.lines,{yPercent:110,autoAlpha:0},{
                yPercent:0,
                autoAlpha:1,
                duration:0.95,
                stagger:0.075,
                ease:'power3.out',
                scrollTrigger:{trigger:element,start:'top 85%',once:true},
              });
            },
          });
          splits.push(split);
        });

        document.querySelectorAll<HTMLElement>('[data-motion="fade"],.contact-copy>p,.contact-form').forEach(element=>{
          gsap.fromTo(element,{autoAlpha:0,y:26},{
            autoAlpha:1,
            y:0,
            duration:0.7,
            ease:'power3.out',
            scrollTrigger:{trigger:element,start:'top 85%',once:true},
          });
        });

        document.querySelectorAll<HTMLElement>('[data-motion="stagger"],.footer-grid').forEach(group=>{
          const children=Array.from(group.children).filter((child):child is HTMLElement=>child instanceof HTMLElement);
          if(!children.length)return;
          gsap.fromTo(children,{autoAlpha:0,y:22},{
            autoAlpha:1,
            y:0,
            duration:0.68,
            stagger:0.1,
            ease:'power3.out',
            scrollTrigger:{trigger:group,start:'top 85%',once:true},
          });
        });

        document.querySelectorAll<HTMLElement>('.about-photo img,.service-photo img,.project-photo img').forEach(image=>{
          const trigger=image.closest('section')??image;
          gsap.fromTo(image,{autoAlpha:0,scale:1.04},{
            autoAlpha:1,
            scale:1,
            duration:1.1,
            ease:'power3.out',
            scrollTrigger:{trigger,start:'top 85%',once:true},
          });
        });
      },document.body);

      ScrollTrigger.refresh();
      }catch{
        // Motion is progressive enhancement: if a plugin or animation fails,
        // restore readable content and leave the site's interactions intact.
        splits.forEach(split=>split.revert());
        document.querySelectorAll<HTMLElement>('[data-motion],.contact-copy h2,.contact-copy>p,.contact-form,.footer-grid,.about-photo img,.service-photo img,.project-photo img').forEach(element=>{
          element.style.removeProperty('opacity');
          element.style.removeProperty('visibility');
          element.style.removeProperty('transform');
        });
        context?.revert();
        return;
      }
      return ()=>{
        splits.forEach(split=>split.revert());
        context?.revert();
      };
    });

    return ()=>media.revert();
  },[]);

  return null;
}
