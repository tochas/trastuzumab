import {describe,it,expect} from 'vitest';
import {trastuzumab as p} from '../src/proteins';
import {buttonMap,deadzone,smooth,validResidue,connectBridge,toggleOrganization,MuseumClock,tourIndex,validateProtein,missingResources} from '../src/core';
describe('Trastuzumab',()=>{
it('Fab y numeración',()=>{expect(validateProtein(p)).toEqual([]);expect(p.chains.map(c=>c.sequence.length)).toEqual([214,220]);expect(validResidue(p,'B220')).toBe(true);expect(validResidue(p,'B221')).toBe(false);expect(validResidue(p,'C100')).toBe(false)});
it('mando estándar',()=>{expect(buttonMap[0]).toBe('confirm');expect(buttonMap[3]).toBe('organization');expect(buttonMap[8]).toBe('reset');expect(Object.keys(buttonMap)).toHaveLength(12)});
it('zona muerta y suavizado',()=>{expect(deadzone(.1)).toBe(0);expect(deadzone(-1)).toBe(-1);expect(smooth(0,1,.02)).toBeGreaterThan(0);expect(smooth(0,1,.02)).toBeLessThan(1)});
it('rechaza puentes falsos y duplicados',()=>{expect(connectBridge(p,[],'A23','B22').status).toBe('wrong');expect(connectBridge(p,[],'A23','A23').status).toBe('same');let done:string[]=[];for(const [a,b] of p.bridges){const n=connectBridge(p,done,a,b);done=n.done;expect(connectBridge(p,done,b,a).status).toBe('duplicate')}expect(done).toHaveLength(4);expect(connectBridge(p,done.slice(0,3),'B147','B203').status).toBe('complete')});
it('las parejas son cisteínas',()=>{for(const id of p.bridges.flat()){const c=p.chains.find(c=>c.id===id[0])!;expect(c.sequence[Number(id.slice(1))-1]).toBe('C')}});
it('cambio de componentes',()=>{expect(toggleOrganization('monomer')).toBe('complex');expect(toggleOrganization('complex')).toBe('monomer')});
it('temporizador pausa e interacción',()=>{const c=new MuseumClock(88,20);c.interact(10);expect(c.tick(20009,11)).toBe(-1);expect(c.tick(20010,11)).toBe(0);c.paused=true;expect(c.tick(22000,11)).toBe(-1);c.interact(23000);expect(c.start).toBe(null);expect(tourIndex(87999,88,11)).toBe(10)});
it('fuentes y destinos válidos',()=>{for(const s of p.tour.steps)expect(p.stations[s.station]).toBeTruthy();for(const s of p.stations)for(const id of s.sources)expect(p.sources.some(x=>x.id===id)).toBe(true);expect(p.questions).toHaveLength(5)});
it('recursos ausentes',async()=>{expect(await missingResources(['/ok','/missing'],(async(x:string)=>({ok:x==='/ok'})) as typeof fetch)).toEqual(['/missing'])});
it('configuración incompleta',()=>{expect(validateProtein({...p,chains:[]})).not.toEqual([])});
});
