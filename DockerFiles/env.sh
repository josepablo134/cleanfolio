if [[ -z $JSON_CONFIG ]]; then
	echo "Loading environment"
	export TAG_PREFIX="xibalbaservices"
	export service="web"
fi
