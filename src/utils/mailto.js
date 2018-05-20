// idea behind this was that <Link/> in React Static doesn't link mailto://

export default (email='', subject='', message='') => {

    const mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + message;

    if(typeof document !== 'undefined') {
        const win = window.open(mailto_link, 'emailWindow');
        //if (win && win.open && !win.closed) win.close();
    } else {
        //return mailto_link
    }

}