function Map() {
    return (
        <div className="flex justify-center items-center w-full h-full mx-auto">
            <div className="w-full h-full">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11202.846291497062!2d109.72700093274894!3d-6.913988142431901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7024ff95555555%3A0xdc91d2d58e2beea!2sAlun-Alun%20Batang!5e0!3m2!1sid!2sid!4v1699397356785!5m2!1sid!2sid"
                className="w-full h-[600px]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Alun-Alun Batang"
            />
            </div>
        </div>
    );
}

export default Map;