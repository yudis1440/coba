var wms_layers = [];


        var lyr_esrisatellite_0 = new ol.layer.Tile({
            'title': 'esri satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_JalanKabupaten_1 = new ol.format.GeoJSON();
var features_JalanKabupaten_1 = format_JalanKabupaten_1.readFeatures(json_JalanKabupaten_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKabupaten_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKabupaten_1.addFeatures(features_JalanKabupaten_1);
var lyr_JalanKabupaten_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKabupaten_1, 
                style: style_JalanKabupaten_1,
                popuplayertitle: 'JalanKabupaten',
                interactive: true,
                title: '<img src="styles/legend/JalanKabupaten_1.png" /> JalanKabupaten'
            });
var format_JalanNasional_2 = new ol.format.GeoJSON();
var features_JalanNasional_2 = format_JalanNasional_2.readFeatures(json_JalanNasional_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanNasional_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanNasional_2.addFeatures(features_JalanNasional_2);
var lyr_JalanNasional_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanNasional_2, 
                style: style_JalanNasional_2,
                popuplayertitle: 'Jalan Nasional',
                interactive: true,
                title: '<img src="styles/legend/JalanNasional_2.png" /> Jalan Nasional'
            });

lyr_esrisatellite_0.setVisible(true);lyr_JalanKabupaten_1.setVisible(true);lyr_JalanNasional_2.setVisible(true);
var layersList = [lyr_esrisatellite_0,lyr_JalanKabupaten_1,lyr_JalanNasional_2];
lyr_JalanKabupaten_1.set('fieldAliases', {'OBJECTID': 'Objectid', 'Kl_Dat_Das': 'Kl_Dat_Das', 'Nm_Ruas': 'NmRuas', 'Shape_Le': 'Shape_Le', 'Thn_Data': 'Thn_Data', 'Status': 'Status', 'Fungsi': 'Fungsi', 'Mendukung': 'Mendukung', 'Ura_Dukung': 'Ura_Dukung', 'Kd_Bd_PU': 'Kd_Bd_PU', 'Kd_Jns_Inf': 'Kd_Jns_Inf', 'Kd_Inf': 'Kd_Inf', 'Propinsi': 'Propinsi', 'Kab_Kot': 'Kab_Kot', 'Kecamatan': 'Kecamatan', 'Desa_Kel': 'Desa_Kel', 'Tk_Ruas_Aw': 'Tk_Ruas_Aw', 'Tk_Ruas_Ak': 'Tk_Ruas_Ak', 'Kd_Patok': 'Kd_Patok', 'Km_Awal': 'Km_Awal', 'Km_Akhir': 'Km_Akhir', 'Nm_Lintas': 'Nm_Lintas', 'Kon_Baik': 'Kon_Baik', 'Kon_Sdg': 'Kon_Sdg', 'Kon_Rgn': 'Kon_Rgn', 'Kon_Rusak': 'Kon_Rusak', 'Kon_Mntp': 'Kon_Mntp', 'Kon_T_Mntp': 'Kon_T_Mntp', 'Panjang': 'Panjang', 'Lbr_Keras': 'Lbr_Keras', 'LHRT': 'LHRT', 'VCR': 'VCR', 'Tipe_Jln': 'Tipe_Jln', 'MST': 'MST', 'Tipe_Keras': 'Tipe_Keras', 'Tanah_Kri': 'Tanah_Kri', 'Macadam': 'Macadam', 'Aspal': 'Aspal', 'Rigid': 'Rigid', 'Thn_Pen_Ak': 'Thn_Pen_Ak', 'Jns_Pen': 'Jns_Pen', 'Koord_X_Aw': 'Koord_X_Aw', 'Koord_Y_Aw': 'Koord_Y_Aw', 'Koord_X_Ak': 'Koord_X_Ak', 'Koord_Y_Ak': 'Koord_Y_Ak', 'foto': 'foto', });
lyr_JalanNasional_2.set('fieldAliases', {'OID': 'OID', 'Name': 'Name', 'Shape_Length': 'ShapeLength', 'Panjang': 'Panjang', 'GSP': 'GSP', 'GSB': 'GSB', 'NamaRuas': 'NamaRuas', });
lyr_JalanKabupaten_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Kl_Dat_Das': 'TextEdit', 'Nm_Ruas': 'TextEdit', 'Shape_Le': 'TextEdit', 'Thn_Data': 'TextEdit', 'Status': 'TextEdit', 'Fungsi': 'TextEdit', 'Mendukung': 'TextEdit', 'Ura_Dukung': 'TextEdit', 'Kd_Bd_PU': 'TextEdit', 'Kd_Jns_Inf': 'TextEdit', 'Kd_Inf': 'TextEdit', 'Propinsi': 'TextEdit', 'Kab_Kot': 'TextEdit', 'Kecamatan': 'TextEdit', 'Desa_Kel': 'TextEdit', 'Tk_Ruas_Aw': 'TextEdit', 'Tk_Ruas_Ak': 'TextEdit', 'Kd_Patok': 'TextEdit', 'Km_Awal': 'TextEdit', 'Km_Akhir': 'TextEdit', 'Nm_Lintas': 'TextEdit', 'Kon_Baik': 'TextEdit', 'Kon_Sdg': 'TextEdit', 'Kon_Rgn': 'TextEdit', 'Kon_Rusak': 'TextEdit', 'Kon_Mntp': 'TextEdit', 'Kon_T_Mntp': 'TextEdit', 'Panjang': 'TextEdit', 'Lbr_Keras': 'TextEdit', 'LHRT': 'TextEdit', 'VCR': 'TextEdit', 'Tipe_Jln': 'TextEdit', 'MST': 'TextEdit', 'Tipe_Keras': 'TextEdit', 'Tanah_Kri': 'TextEdit', 'Macadam': 'TextEdit', 'Aspal': 'TextEdit', 'Rigid': 'TextEdit', 'Thn_Pen_Ak': 'TextEdit', 'Jns_Pen': 'TextEdit', 'Koord_X_Aw': 'TextEdit', 'Koord_Y_Aw': 'TextEdit', 'Koord_X_Ak': 'TextEdit', 'Koord_Y_Ak': 'TextEdit', 'foto': 'TextEdit', });
lyr_JalanNasional_2.set('fieldImages', {'OID': 'TextEdit', 'Name': 'TextEdit', 'Shape_Length': 'TextEdit', 'Panjang': 'TextEdit', 'GSP': 'TextEdit', 'GSB': 'TextEdit', 'NamaRuas': 'TextEdit', });
lyr_JalanKabupaten_1.set('fieldLabels', {'OBJECTID': 'no label', 'Kl_Dat_Das': 'no label', 'Nm_Ruas': 'inline label - always visible', 'Shape_Le': 'no label', 'Thn_Data': 'no label', 'Status': 'inline label - always visible', 'Fungsi': 'inline label - always visible', 'Mendukung': 'no label', 'Ura_Dukung': 'no label', 'Kd_Bd_PU': 'no label', 'Kd_Jns_Inf': 'no label', 'Kd_Inf': 'no label', 'Propinsi': 'no label', 'Kab_Kot': 'no label', 'Kecamatan': 'no label', 'Desa_Kel': 'no label', 'Tk_Ruas_Aw': 'no label', 'Tk_Ruas_Ak': 'no label', 'Kd_Patok': 'no label', 'Km_Awal': 'no label', 'Km_Akhir': 'no label', 'Nm_Lintas': 'no label', 'Kon_Baik': 'no label', 'Kon_Sdg': 'no label', 'Kon_Rgn': 'no label', 'Kon_Rusak': 'no label', 'Kon_Mntp': 'no label', 'Kon_T_Mntp': 'no label', 'Panjang': 'inline label - always visible', 'Lbr_Keras': 'no label', 'LHRT': 'no label', 'VCR': 'no label', 'Tipe_Jln': 'no label', 'MST': 'no label', 'Tipe_Keras': 'no label', 'Tanah_Kri': 'no label', 'Macadam': 'no label', 'Aspal': 'no label', 'Rigid': 'no label', 'Thn_Pen_Ak': 'no label', 'Jns_Pen': 'no label', 'Koord_X_Aw': 'no label', 'Koord_Y_Aw': 'no label', 'Koord_X_Ak': 'no label', 'Koord_Y_Ak': 'no label', 'foto': 'inline label - always visible', });
lyr_JalanNasional_2.set('fieldLabels', {'OID': 'inline label - always visible', 'Name': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', 'Panjang': 'inline label - always visible', 'GSP': 'inline label - always visible', 'GSB': 'inline label - always visible', 'NamaRuas': 'inline label - always visible', });
lyr_JalanNasional_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});