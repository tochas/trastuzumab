from pathlib import Path
import json,math,shlex
r=Path(__file__).resolve().parents[1];raw=(r/'public/models/1N8Z.pdb').read_text().splitlines()
atoms=[l for l in raw if l.startswith('ATOM')];ca=[l for l in atoms if l[12:16].strip()=='CA']
assert {c:sum(l[21]==c for l in ca) for c in 'ABC'}=={'A':214,'B':220,'C':581}
for name,chains in [('fab','AB'),('her2','C'),('complex','ABC')]:
 out=[l for l in (r/f'public/models/trastuzumab-{name}.pdb').read_text().splitlines() if l.startswith('ATOM')]
 assert out==[l for l in atoms if l[21] in chains]
sg={l[21]+str(int(l[22:26])):tuple(float(l[a:b]) for a,b in [(30,38),(38,46),(46,54)]) for l in atoms if l[12:16].strip()=='SG'}
pairs=[('A23','A88'),('A134','A194'),('B22','B96'),('B147','B203')];distances={f'{a}-{b}':math.dist(sg[a],sg[b]) for a,b in pairs};assert all(1.9<d<2.2 for d in distances.values())
# Compare original coordinates with author-provided biological assembly 1.
lines=(r/'public/models/1N8Z-assembly1.cif').read_text().splitlines();keys=[];rows=[];reading=False
for l in lines:
 if l.startswith('_atom_site.'):
  keys.append(l.strip());reading=True
 elif reading:
  if l.startswith('#'):break
  if l.strip():rows.append(shlex.split(l))
cols={k.split('.')[1]:i for i,k in enumerate(keys)}
cif={(v[cols['auth_asym_id']],v[cols['auth_seq_id']],v[cols['auth_atom_id']]):tuple(float(v[cols[k]]) for k in ['Cartn_x','Cartn_y','Cartn_z']) for v in rows if v[cols['group_PDB']]=='ATOM'}
for l in atoms:
 key=(l[21],str(int(l[22:26])),l[12:16].strip());xyz=tuple(float(l[a:b]) for a,b in [(30,38),(38,46),(46,54)])
 assert key in cif and math.dist(xyz,cif[key])<.002,key
report={'counts':{'A':214,'B':220,'C_observed':581,'C_deposited':607},'fabDisulfideDistancesAngstrom':distances,'coordinatesPreserved':True,'assembly1Matches':True,'atomCount':len(atoms),'note':'Fab 434 residues, not the full antibody. C has 26 residues without coordinates.'}
(r/'evidence/model-audit.json').write_text(json.dumps(report,indent=2));print(json.dumps(report,indent=2))
