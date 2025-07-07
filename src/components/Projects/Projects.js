import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MetK from "../../Assets/Projects/MetK2.png";
import aiicon from "../../Assets/Projects/ai2.png";
import databaseicon from "../../Assets/Projects/db2.png";
import odorify from "../../Assets/Projects/Odorify2.png";
import AgX from "../../Assets/Projects/AgX2.png";
import GC from "../../Assets/Projects/GC2.png";
import rct from "../../Assets/Projects/rct2.png";
import oncg from "../../Assets/Projects/oncg2.png";
import EvOlf from "../../Assets/Projects/Evolf2.png";
import moa from "../../Assets/Projects/moa2.png";
import cov19 from "../../Assets/Projects/con192.png";
import camage from "../../Assets/Projects/camage2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GC}
              isBlog={false}
              title="Gcoupler"
              description="AI-driven generalized computational toolkit that leverages an integrative approach combining de novo ligand design, statistical methods, Graph Neural Networks, and Bioactivity-based ligand prioritization for rationally predicting high-affinity ligands."
              ghLink="https://github.com/SanjayISHIGAMI/Gcoupler-latest"
              demoLink="https://elifesciences.org/reviewed-preprints/106397"
              journal="eLife (IF 6.4)"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MetK}
              isBlog={false}
              title="Metabokiller"
              description="Ensemble classifier that accurately recognizes carcinogens by quantitatively assessing their electrophilicity, their potential to induce proliferation, oxidative stress, genomic instability, epigenome alterations, and anti-apoptotic response."
              ghLink="https://github.com/SanjayISHIGAMI/Metabokiller"
              demoLink="https://www.nature.com/articles/s41589-022-01110-7"
              journal="Nature Chem. Biol. (IF 16.3)"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rct}
              isBlog={false}
              title="OR-selection-model"
              description="Reverse Cell Tracking (RCT), a novel computational framework that facilitates OR-guided cellular backtracking by leveraging Uniform Manifold Approximation and Projection embeddings from RNA Velocity Workflow."
              ghLink="https://github.com/SanjayISHIGAMI/OR-selection-model"
              demoLink="https://academic.oup.com/bfg/article/22/3/281/6931727"
              journal="Brief. Funct. Genomics (IF 4.8)"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AgX}
              isBlog={false}
              title="AgeXtend"
              description="An artificial intelligence (AI)-based multimodal geroprotector prediction platform that leverages bioactivity data of known geroprotectors. AgeXtend encompasses modules that predict geroprotective potential, assess toxicity and identify target proteins and potential mechanisms."
              ghLink="https://github.com/the-ahuja-lab/AgeXtend"
              demoLink="https://www.nature.com/articles/s43587-024-00763-4"
              journal="Nature Ageing  (IF 17.0)" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moa}
              isBlog={false}
              title="Machine-OlF-Action"
              description="User-friendly, open-source computational framework, that utilizes user-supplied SMILES (simplified molecular input line entry system) of the chemicals, along with their activation status, to synthesize classification models."
              ghLink="https://github.com/SanjayISHIGAMI/Machine-Olf-Action"
              demoLink="https://academic.oup.com/bioinformatics/article/37/12/1769/6070099"
              journal="Bioinformatics (IF 6.9)"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cov19}
              isBlog={false}
              title="2019-nCoV-infection"
              description="2019-nCoV infection-mediated compromise in abundance or cellular function of SUSs (supporting cells), olfactory stem cells (OSCs) and Bowman’s gland cells of the olfactory epithelium are the most probable causes of anosmia."
              demoLink="https://academic.oup.com/bib/article/22/2/873/5893433"
              journal="Brief. Bioinformatics (IF 9.5)" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={odorify}
              isBlog={false}
              title="Odorify"
              description="Enabling (1) identification of odorant molecules for wildtype or mutant human ORs (Odor Finder); (2) classification of user-provided chemicals as odorants/nonodorants (Odorant Predictor); (3) identification of responsive ORs for a query odorant (OR Finder); and (4) interaction validation using Odorant–OR Pair Analysis."
              ghLink="https://github.com/the-ahuja-lab/OdoriFy"
              demoLink="https://www.jbc.org/article/S0021-9258(21)00756-0/fulltext"
              journal="JBC (IF 5.5)" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={camage}
              isBlog={false}
              title="scCamAge"
              description="an advanced context-aware multimodal prediction engine that co-leverages image-based cellular spatiotemporal features at single-cell resolution alongside cellular morphometrics and aging-associated bioactivities such as genomic instability, mitochondrial dysfunction, vacuolar dynamics, reactive oxygen species levels, and epigenetic and proteasomal dysfunctions."
              demoLink="https://www.sciencedirect.com/science/article/pii/S2211124725000415?via%3Dihub"
              journal="Cell Reports (IF 9.9)" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EvOlf}
              isBlog={false}
              title="EvOlf"
              description="An evolutionary-guided deep-learning framework that integrates odorant receptors (ORs) and non-odorant GPCRs (nonORs), along with their experimentally validated agonists and non-agonists, spanning an expanded receptor sequence and ligand chemical space."
              ghLink="https://github.com/SanjayISHIGAMI/EvOlf"
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oncg}
              isBlog={false}
              title="OncoGen.AI"
              description="An end-to-end, clinical-grade platform that automates this entire workflow from raw sequencing data to a final report."
              ghLink="https://github.com/the-ahuja-lab/OncoGen.AI"
              // demoLink=" "      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiicon}
              isBlog={false}
              title="MetaboGlue"
              description="A generative AI platform integrating data-driven and structure-based approaches for the design of multi-target therapeutics."
              // ghLink=""
              // demoLink=" "      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiicon}
              isBlog={false}
              title="MutAIVerse"
              description="Facilitating the identification of DNA adducts from untargeted metabolomics mass spectrometry data along with predictive capabilities to determine potential source genotoxins responsible for the novel identified or pre-existing adduct formation."
              // ghLink=""
              demoLink="https://test.pypi.org/project/MutAIverse/" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={databaseicon}
              isBlog={false}
              title="NDM1 Binder"
              description="Development of Novel NDM-1 inhibitors using Chemical and Bioactivity features and Artificial Intelligence-based Approache."
              // ghLink=" "
              demoLink="https://test.pypi.org/project/NDM1Binder/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
