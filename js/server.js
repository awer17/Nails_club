// list masrers

const MASTER_API = 'json/list_master.json';


// list servise

const SERVIS_API = 'json/services.json';

const getResource = async(url) => {
    try {
        const res = await fetch(url);
        return res.json();
    } catch (err) {
        throw new Error(`!!!!!!!!!!! ${err}`)
    }
}

const getListMaster = async () => {
    const data1 = await getResource (`${MASTER_API}`);
    return data1;
}



const getListServis = async () => {
    const data = await getResource(`${SERVIS_API}`);

    return data;
}