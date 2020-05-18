delete from covid_data;
.separator ","
.import '| tail -n +2 downloaded_data/200517COVID19MEXICO.csv' covid_data

.import '| tail -n +2 ../downloaded_data/Catalogos_0412/ORIGEN.csv' origen

.import '| tail -n +2 ../downloaded_data/Catalogos_0412/ENTIDADES.csv' entidades

.import '| tail -n +2 ../downloaded_data/Catalogos_0412/MUNICIPIOS.csv' municipios

.import '| tail -n +2 ../downloaded_data/Catalogos_0412/NACIONALIDAD.csv' nacionalidad

.import '| tail -n +2 ../downloaded_data/Catalogos_0412/SEXO.csv' sexo

.import '| tail -n +2 ../downloaded_data/Catalogos_0412/RESULTADO.csv' resultado

.import '| tail -n +2 ../downloaded_data/Catalogos_0412/SECTOR.csv' sector

.import '| tail -n +2 ../downloaded_data/Catalogos_0412/SI_NO.csv' si_no

.import '| tail -n +2 ../downloaded_data/Catalogos_0412/TIPO_PACIENTE.csv' tipo_paciente

