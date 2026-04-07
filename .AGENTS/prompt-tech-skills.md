# Prompt de tecnologias a usar en el proyecto
Aqui se describen las tecnologias que se usaran en el proyecto.

## Frontend
Design: Next.js + React + Typescript + Tailwild
#### Wallet
Wallet hooks: Wagmi + Viem
Wallet UI: RainbowKit

Protocolo que se usara: EIP-712 Signer
## Backend + ML
Para cada campo se usará:
1. API: 
FastAPI (Python)
2. Procesamiento de ML: 
Scikit-learn o XGBoost
3. Visión artificial 
Aquí se deberá usar una OCR para la extracción de datos de los documentos, opción más viable por ahora: Tesseract
4. Agentes de IA: 
Langchain o CrewIA

## Supabase
Se usara los servicios de:
1. BD: PostgreSQL de Supabase
2. Storage Supabase
3. Auth Supabase (usando el OAuth de Google que viene integrado)

## Conflux Network
#### Tree-Graph:
- Consensus layer
- Alta concurrencia
- Scoring events
- Bloques paralelos
#### Core Space:
- Conflux nativo
- Gasless txs
- Score registry
- CRC-20 sponsor
#### eSpace (EVM):
- Solidity - EVM
- Lending protocol
- Score consume
- Cross-space bridge
