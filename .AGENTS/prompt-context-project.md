# Prompt para el contexto del proyecto
Aqui se describe el contexto del proyecto, de que trata, como se estructura y todos los puntos clave de manera general.

## Que es CONFLUXI
Confluxi es un credit scoring para wallets DeFi.
Basicamente es un protocolo para calcular un scoring de riesgo valido para wallets.
## Modulos
El protocolo consta de dos modulos: principal (on-chain) y complementario (off-chain).
(operacion previa:
0. usuario se registra
)
### Principal
Para: on-chain
Se centra en analizar, evaluar y dar un score de riesgo basado en el historial y actividad en la red blockchain.
El flujo es el siguiente:
1. se ingresa una wallet y datos relacionados
2. consulta señales on-chain basicas
3. calcula un score de riesgo usando reglas transparentes
4. genera una explicacion legible
5. publica un snapshot verificable en Conflux

### Complementario
Para: off-chain
Se centra en analizar, evaluar y dar un score de riesgo basado en informacion verificable del individuo en si mismo.
#### Primera fase
Parte de la información básica (ubicación y número de identidad), se realiza una consulta a la base de datos de la entidad del país para verificar si existe la información marcada.
#### Segunda fase
Con esos dos datos confirmados, se procede con una verificación geográfica.
#### Tercera fase
De acuerdo a la ubicación geográfica se solicitarán documentos para validar su identidad, situación actual en el país, cargos y demás.
#### Cuarta fase
Aquí se pedirán documentos e información financiera verificable.

Con todo esto, se determinará un score de riesgo complementario.

## Subsistema de reporte
Cada usuario puede hacer un reporte a otro usuario, este reporte se validará y verificará. Si el reporte es correcto se determinará el impacto del reporte:
1. Agravante: un solo tipo de este reporte puede bloquear la cuenta de otro usuario para usar el protocolo y marcarlo como "ALTO PELIGRO", reducir su score y confiabilidad al mínimo.
2. Malo: estos reportes se muestran en el perfil del usuario, puede ser solicitado a reevaluación y refutación hasta por 2 veces, puede aumentar tu score de riesgo. Estos son acumulables, al llegar a cierto límite (10) se evalúa el marcarte como "ALTO PELIGRO" y reportarte.
3. Menor: estos reportes no se muestran en el perfil del usuario solo se muestra el número de reportes menores en una esquina de tu perfil, si no se agregan ningún reporte en el lapso de 30 días se borran automáticamente, también son acumulables, al llegar a 20 reportes se evalúa si convertirlo en un reporte de impacto "Malo" y se notifica al usuario reportado, si siguen aumentando hasta llegar a 50, se evalúa de nuevo para reportar al usuario como "ALTO RIESGO".

## Cálculo del score de riesgo
En cada usuario el score que sacarán se basaría en dos: on-chain y off-chain.
<< Un usuario no necesarimente debe tener los dos, pero debería tener al menos uno>>
### Casos:
#### Caso 01: no tiene on-chain
En caso el usuario es nuevo y no posee un historial de transacciones o este sea demasiado corto, puede basarse en la opción complementaria para sacar su score.
#### Caso 02: no tiene off-chain
En este caso es imposible que no tenga documentos que validen su identidad o sus cosas en su país o gobierno, pero trabajamos con la idea de que no quiere ingresarlos, en ese caso necesitaría trabajar con un score de on-chain.
#### Caso 03: no tiene ninguno de los dos
Al momento de su registro, necesita ingresar su ubicación (país, región, provincia), número de documento de identidad, su correo y su nombre de usuario, así que obtendrá solo por su registro un score predeterminado tipo off-chain, pero este no le servirá para tener validación con el protocolo, para ser funcional debe agregar más información verificable.
### Cálculo de operaciones
Tu posicionamiento de confianza según el protocolo se puede categorizar en 3:
1. #### Default
Es básicamente el score básico que te da al registrarte, no da confianza alguna en operaciones.
2. #### One-type
Posees uno de los score (on-chain/off-chain), este es el que más se mostrará, el más visible y vistosos para los demás usuarios.
<------------(On-chain:50)------------><-(Off-chain:5)->
3. #### Total
Posees ambos score, en este caso si habrá una animación especial, los dos score se mostrarán y abajo también se mostrarán de una forma distintiva un valor promedio de ambos score.

## Especificaciones:
Para los off-chain: los documentos subidos solo son visibles por los propios usuarios, lo que si es público es su score y el título de los documentos que subió (Ejemplo: Score off-chain: 40 > Documentos: DNI (Aprovado) / Historial financiero (Sin deudas), y así continuamente).